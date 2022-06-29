import { ObjectId } from "bson";

export interface Post {
  _id?: ObjectId;
  text: string;
  userId: string;
  likes: Array<ObjectId>;
}
