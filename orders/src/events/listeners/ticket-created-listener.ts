import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketCreatedEvent } from '@pradyumnacharate-arrow-ticketing/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName = queueGroupName;
  //on message means when event comes what do we do with that event data
  //when message comes take look at data property.it should be similar to Ticketcreatedevent['data'](we are checking this here)
  //msg comes from nats server.we are using it for acknoledgment that message has processes event.
  async onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    const { id, title, price } = data;

    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    await ticket.save();

    msg.ack();
  }
}
