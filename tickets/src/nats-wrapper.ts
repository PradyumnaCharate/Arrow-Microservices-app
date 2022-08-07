//Similar to mongoose when we connect once to mongo uri all seems to work(we can perform quries in any files in our app)..
//but with nats we need to export that
//client object which is connected to all files so avoiding that we are creating interface for nats just like mongoose  
import nats, { Stan } from 'node-nats-streaming';
//we are creating class to initialize nats and then we will create instance of this class and export it.
//then we can use it anywhere
class NatsWrapper {
  //? tells typescript that this object will be undefined for sometimes ...until we connect to nats in index.js 
  private _client?: Stan;
  //client needs to be accesses but it is private so defining getter for client
  get client() {
    if (!this._client) {
      throw new Error('Cannot access NATS client before connecting');
    }

    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    return new Promise<void>((resolve, reject) => {
      this.client.on('connect', () => {
        console.log('Connected to NATS');
        resolve();
      });
      this.client.on('error', (err) => {
        reject(err);
      });
    });
  }
}
//exporting class object instance to share with all files
export const natsWrapper = new NatsWrapper();
