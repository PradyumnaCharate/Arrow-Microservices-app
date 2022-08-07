export const natsWrapper = {
  client: {
    //jest automatically checks if function is invoked and arguments were received so testing is success
    publish: jest
      .fn()
      .mockImplementation(
        (subject: string, data: string, callback: () => void) => {
          callback();
        }
      ),
  },
};
