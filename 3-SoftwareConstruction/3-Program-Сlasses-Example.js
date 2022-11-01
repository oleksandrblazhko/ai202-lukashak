import mongoose from 'mongoose';
const { Schema } = mongoose;

const user = new Schema({
  username: String,
  avatar: Schema.Types.Buffer,
  profileId: Schema.Types.ObjectId,
  savedProfileIds: [Schema.Types.ObjectId],
});

const profile = new Schema({
  name: String,
  photo: Schema.Types.Buffer,
  shortDescription: String,
  fullProfile: {
    photos: [Schema.Types.Buffer],
    fullDescription: String,
    contacts: String,
    age: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
    height: {
      type: Number,
      get: v => Math.round(v),
      set: v => Math.round(v),
    },
  }
});

const archInfo = new Schema({
  name: String,
  description: String,
  photo: Schema.Types.Buffer,
  location: {
    latitude: Number,
    longitude: Number
  }
});

const message = new Schema({
  text: String,
  date: Number,
  sender: Schema.Types.ObjectId,
  receiver: Schema.Types.ObjectId
});

class Api {
  constructor(protocol, ver, key, address) {
    this.protocol = protocol;
    this.version = ver;
    this._key = key;
    this.address = address;
  }
}