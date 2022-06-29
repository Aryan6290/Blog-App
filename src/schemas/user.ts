import { ObjectId } from "bson";

//def
export interface User {
  _id?: ObjectId;
   name : string;
   password : string;
   email : string;

}
