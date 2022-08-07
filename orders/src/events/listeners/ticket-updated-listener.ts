import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketUpdatedEvent } from '@pradyumnacharate-arrow-ticketing/common';
import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

//we are listning for TicketUpdatedEvent
export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
    const ticket = await Ticket.findByEvent(data);

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    const { title, price } = data;
    ticket.set({ title, price });
    await ticket.save();

    msg.ack();
  }
}




//////////////////////////////////////////////////////////////VERY Important///////////////////////////////////////////////////////////////////
//If we want to update ticket based on events we face concurrency issues.One latest update for ticket may get processsed before
//old update so we introduce versioning system.We process event only if previous vversion is less than 1 by current version.
//othewrwise we dont do msg.ack()..then nats will stop and reemit that event again after some seconds.until that we should have 
//processes right version number ticket

//mongoose and mongodb have already optimistic control in it (versioning stuff).we need to install
//mongoose-if-update-current plugin package



///Record versions can be updated and incremented by only primary service who is in charge of that(ticket for ticket)