import { Subjects } from './subjects';

//so whenever we emit tickit event data should have this structure 
export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}
