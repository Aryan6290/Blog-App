import { Router } from "express";
import { authMiddleware } from "./auth";
import * as userController from "./users/userController";
import * as postController from "./posts/postController";

export const router = Router();

//Login and Signup
router.post("/user/login", userController.loginUser);
router.post("/user/add", userController.signupNewUser);
router.post("/user/add-details", userController.addUserDetails, authMiddleware);
router.post("/user/get-details", userController.getUserDetails, authMiddleware);
router.post("/user/change", userController.changePassword, authMiddleware);

//Meals
router.post("/post/add", postController.addPost, authMiddleware);
router.post("/post/get", postController.getAllPosts, authMiddleware);
router.delete("/meal/delete", postController.deletePost, authMiddleware);
