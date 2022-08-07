import { Publisher, OrderCreatedEvent, Subjects } from "@pradyumnacharate-arrow-ticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
