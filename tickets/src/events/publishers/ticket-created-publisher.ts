import { Publisher, Subjects, TicketCreatedEvent } from "@pradyumnacharate-arrow-ticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
   subject:Subjects.TicketCreated = Subjects.TicketCreated;
}
