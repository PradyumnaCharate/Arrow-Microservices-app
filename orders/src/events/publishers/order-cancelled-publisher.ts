import { Subjects, Publisher, OrderCancelledEvent } from "@pradyumnacharate-arrow-ticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
