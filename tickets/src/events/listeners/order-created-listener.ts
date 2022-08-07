import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from '@pradyumnacharate-arrow-ticketing/common';
import { queueGroupName } from './queue-group-name';
import { Ticket } from '../../models/ticket';
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    // Find the ticket that the order is reserving
    const ticket = await Ticket.findById(data.ticket.id);

    // If no ticket, throw error
    if (!ticket) {
      throw new Error('Ticket not found');
    }

    // Mark the ticket as being reserved by setting its orderId property
    ticket.set({ orderId: data.id });

    // Save the ticket
    await ticket.save();
    //here instead importing client from natswrapper and creating cyclic dependency we have changes client property from private 
    //to protected so as this listner class is children of listener we can directly access client property.
    // when we add order id to ticket.ticket gets updated .so version number changes.so this can create problem when we 
    //updatte ticket next time as order service versions need some consistency.so here also we are emitting tikcet updated event.
    await new TicketUpdatedPublisher(this.client).publish({
      id: ticket.id,
      price: ticket.price,
      title: ticket.title,
      userId: ticket.userId,
      orderId: ticket.orderId,
      version: ticket.version,
    });

    // ack the message
    msg.ack();
  }
}
