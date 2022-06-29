import { ObjectId } from "bson";
import { Post } from "./../../schemas/post";
import { Request, Response } from "express";
import { getDatabase } from "../../../src/database";

export const addPost = async (req: Request, res: Response) => {
  const db = getDatabase();

  try {
    const { userId, text } = req.body;

    if (!userId || !text) {
      return res.status(400).send({ message: "Sufficient data not provided" });
    }

    const newPost = db.collection<Post>("posts").insertOne({
      text: text,
      userId: userId,
      likes: [],
    });

    if (newPost) {
      return res.status(200).send({ message: "Post added successfuly" });
    }
    return res.status(500).send({ message: "Failed to add post" });
  } catch (error) {
    return res.status(500).send({ message: "Failed to add post" });
  }
};

export const editPost = async (req: Request, res: Response) => {
  const db = getDatabase();

  try {
    const { newText, id } = req.body;

    if (!id || !newText) {
      return res.status(400).send({ message: "Sufficient data not provided" });
    }

    const isPostFound = db.collection<Post>("posts").findOne({ _id: id });

    if (!isPostFound) {
      return res.status(404).send({ message: "No Post Found!" });
    }

    const editedPost = db.collection<Post>("posts").findOneAndUpdate(
      { _id: new ObjectId(id) },
      {
        text: newText,
      }
    );

    if (editedPost) {
      return res.status(200).send({ message: "Post edited successfuly" });
    }
    return res.status(500).send({ message: "Failed to update post" });
  } catch (error) {
    return res.status(500).send({ message: "Failed to update post" });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const db = getDatabase();

  try {
    const { newText, id } = req.body;

    if (!id || !newText) {
      return res.status(400).send({ message: "Sufficient data not provided" });
    }

    const editedPost = db
      .collection<Post>("posts")
      .findOneAndDelete({ _id: new ObjectId(id) });

    if (editedPost) {
      return res.status(200).send({ message: "Post edited successfuly" });
    }
    return res.status(500).send({ message: "Failed to update post" });
  } catch (error) {
    return res.status(500).send({ message: "Failed to update post" });
  }
};

export const getAllPosts = async (req: Request, res: Response) => {
  const db = getDatabase();

  try {
    const allPosts = await db.collection<Post>("posts").find({});

    if (allPosts) {
      return res.status(200).send({ message: "Posts fetched successfuly" });
    }
    return res.status(500).send({ message: "Failed to fetch posts" });
  } catch (error) {
    return res.status(500).send({ message: "Failed to fetch posts" });
  }
};
