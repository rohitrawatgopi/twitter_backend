import ITweetInterface from "../database/interface/tweet.interface";
import TweetModel from "../database/models/tweet.model";
import userRepositories from "./user.repository";
const tweetRepositories = {
  getAllTweetRepo: async (): Promise<any[] | null> => {
    try {
      const success = await TweetModel.find();
      console.log("success");

      return success;
    } catch (error) {
      console.log("Get All tweet repo" + error);
      return null;
    }
  },

  createTweetRepo: async (
    tweet: ITweetInterface
  ): Promise<boolean | ITweetInterface> => {
    try {
      const createTweet = await TweetModel.create(tweet);
      const updateUser = await userRepositories.updateUserUsingTweetIdRepo(
        tweet.adminId,
        tweet.tweetId
      );

      console.log(updateUser);

      if (createTweet) {
        return createTweet;
      } else {
        return false;
      }
    } catch (error) {
      console.log("createTweetRepo" + error);
      return false;
    }
  },
  getTweetRepo: async (tweetId: string): Promise<null | ITweetInterface> => {
    try {
      const tweet = await TweetModel.findOne({ tweetId: tweetId });
      if (tweet) {
        return tweet;
      } else {
        return null;
      }
    } catch (error) {
      console.log("getTweetRepo" + error);
      return null;
    }
  },
  updatedTweetRepo: async (
    tweetId: string,
    updateTweet: ITweetInterface
  ): Promise<ITweetInterface | boolean> => {
    try {
      const updatedTweet = await TweetModel.findOneAndUpdate(
        { tweetId: tweetId },
        updateTweet
      );
      if (updateTweet) {
        return updateTweet;
      } else {
        return false;
      }
    } catch (error) {
      console.log("updatedTweetrepo" + error);
      return false;
    }
  },
  deleteTweetRepo: async (tweetId: string): Promise<boolean> => {
    try {
      const success = await TweetModel.findOneAndDelete({ tweetId: tweetId });
      if (success) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("deleteTweetRepo" + error);
      return false;
    }
  },
};
export default tweetRepositories;
