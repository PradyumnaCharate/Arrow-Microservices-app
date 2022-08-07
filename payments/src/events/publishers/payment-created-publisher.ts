import { Subjects, Publisher, PaymentCreatedEvent } from "@pradyumnacharate-arrow-ticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
