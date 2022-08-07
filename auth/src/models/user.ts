import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
  email: string;
  password: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has(extra properties like createdat and updated at are addeed behind scenes to document so typescript will
//say user model does not have this properties and also adding here custom properties)
interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
{
  //if we perform json.stringify on any object then it will run default toJson method which is automatically assigned to object
  //but if we define tojson method in object itself then in that function whatever is returned json.stringify will also 
  //return that only.So here also in schema we are declaring to json function so that we normalize our response to 
  //same pattern
  //so here we are changing _id to id so id will be returned instead of _id.doc argument is original object and ret is 
  //trandformed json object .so we dont want password and _v so deleting it herer
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
    }
  }
}
);
//this is middleware function impemented in mongoose.Anytime we try to save user this will get executed first.
//here we are converting password into hash and storing it. 
userSchema.pre('save', async function(done) {
  //if only password field in document is modified (created or modified). 
  if (this.isModified('password')) {
    //converting password to hashed password.this.get will get pass from that document.
    const hashed = await Password.toHash(this.get('password'));
    //will set hashed password
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
