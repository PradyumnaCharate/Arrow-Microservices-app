import Queue from 'bull';
import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';

interface Payload {
  orderId: string;
}
//Bull is used for sceduling tasks to some time.
//Bull stores events in redis server.
//Queue takes two argument.subject name(channel name) and redis url which is defined in k8 file
//we are storing payload job object  in redis. 
const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});
//after expiry we will publish event .until then job remains saved in redis server
//redis is basically in memory server
expirationQueue.process(async (job) => {
  new ExpirationCompletePublisher(natsWrapper.client).publish({
    orderId: job.data.orderId,
  });
});

export { expirationQueue };
