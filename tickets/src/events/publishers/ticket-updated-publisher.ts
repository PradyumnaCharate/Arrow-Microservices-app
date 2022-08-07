import { Publisher, Subjects, TicketUpdatedEvent } from "@pradyumnacharate-arrow-ticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
