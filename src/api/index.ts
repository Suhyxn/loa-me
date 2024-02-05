import { selector, selectorFamily } from "recoil";
import axios from "axios";
import { Characters } from "../types";

export const getCharacter = selectorFamily({
  key: "getCharacter",
  get: (characterName: string | undefined) => async () => {
    try {
      const response: Characters = await axios.get(
        `https://developer-lostark.game.onstove.com/characters/${characterName}/siblings`,
        {
          headers: {
            authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );

      const data = response;
      return data;
    } catch (err) {
      throw Error("Error");
    }
  },
});
