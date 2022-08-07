import nats, { Message } from 'node-nats-streaming';
import { randomBytes } from 'crypto';

console.clear();
//2nd argument is client id.If we want to scale services we should not have same client id for 2 instances.
//so generating id with crypto
const stan = nats.connect('ticketing', randomBytes(4).toString('hex'), {
  url: 'http://localhost:4222',
});

stan.on('connect', () => {
  console.log('Listener connected to NATS');
  //if we restart client or close client then  
  stan.on('close', () => {
    console.log('NATS connection closed!');
    process.exit();
  });


  //default behavoiur of nats is if event is received by service then it says ok all good.But in service if that event is failed
  //to save to database.i.e data in event was not validated or failed to save then event is lost.
  //so if ack mode is true then nats server waits for an ackknowledgement from service for 30 seconds or so and then if 
  //no acknoledgement is recieved then it sends event to other replica of service or to same service if replica is not availble
  const options = stan
    .subscriptionOptions()
    .setManualAckMode(true)
    .setDeliverAllAvailable()
    .setDurableName('accounting-service');

    //2nd argument is queue.If we have 2 replicas of same services running (we have scaled services ) so event will be listened
    //by both services replicas and both will store them.This should not happen.So there is queue so that queue will 
    //distribute events randmoly to replicas but not same event to both of them
  const subscription = stan.subscribe(
    'ticket:created',
    'queue-group-name',
    options
  );

  subscription.on('message', (msg: Message) => {
    const data = msg.getData();

    if (typeof data === 'string') {
      console.log(`Received event #${msg.getSequence()}, with data: ${data}`);
    }
    //ackknledging that event is succesfully processed
    msg.ack();
  });
});

//signint means we hit rs in terminal (restart) then typescipt sends these signals so if ctrl c or restart
//then close connection
process.on('SIGINT', () => stan.close());
process.on('SIGTERM', () => stan.close());



//in nats-depl we have arguments like '-hbi','5s','-hbt','5s','-hbf','2',these are health checks 
//so after every 5 seconds we are going to check if client is online by sending some request
//client must give response in 5 seconds and it can maximum fail up to 2 times then it is considerred to be dead
