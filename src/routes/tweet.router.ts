import { Router } from "express";
import tweetControllers from "../controllers/tweet.controllers";

const tweetRouter = Router();
tweetRouter.get("/:tweetId", tweetControllers.getTweetController);
tweetRouter.get("/all ", tweetControllers.getAllTweetController);
tweetRouter.post("/", tweetControllers.createTweetController);
tweetRouter.delete("/:tweetId", tweetControllers.deleteTweetController);
tweetRouter.put("/", tweetControllers.updateTweetController);
export default tweetRouter;
