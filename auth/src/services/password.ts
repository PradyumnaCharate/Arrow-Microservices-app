import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

//scrypt is used for hash the password.But it is callback based implementation.So converting it into promise based implementaion
// so that we can use async await syntax.
const scryptAsync = promisify(scrypt);
//static methods are directly available to class without need to creating the object of class
export class Password {
  static async toHash(password: string) {
    //will generate random string
    const salt = randomBytes(8).toString('hex');

    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    //returning hashed password and salt key seperated by .
    return `${buf.toString('hex')}.${salt}`;
  }

  static async compare(storedPassword: string, suppliedPassword: string) {
    //splitting 2 values from db
    const [hashedPassword, salt] = storedPassword.split('.');
    const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

    return buf.toString('hex') === hashedPassword;
  }
}
