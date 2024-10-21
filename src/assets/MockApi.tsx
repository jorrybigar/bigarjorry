import Sugar from "../assets/svg-game/sugarRush.svg";
import Shaolin from "../assets/svg-game/tiger.svg";
import Wolf from "../assets/svg-game/wolf.svg";
import Egypt from "../assets/svg-game/egypt.svg";
import Pirate from "../assets/svg-game/pirate.svg";
import Crocodile from "../assets/svg-game/crocodile.svg";
import Anaconda from "../assets/svg-game/anaconda.svg";
import Maya from "../assets/svg-game/maya.svg";
import Beach from "../assets/svg-game/beach.svg";
import Inca from "../assets/svg-game/incajackpot.svg";
import Persia from "../assets/svg-game/pride.svg";

interface Game {
  id: number;
  title: string;
  image: string;
  isFavorite: boolean;
  gameType: string;
}

export const fetchGame = (): Promise<Game[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Sugar Rush",
          image: Sugar,
          isFavorite: false,
          gameType: "New",
        },
        {
          id: 2,
          title: "Shaolin Crew",
          image: Shaolin,
          isFavorite: false,
          gameType: "New",
        },
        {
          id: 3,
          title: "Big Bad Wolf",
          image: Wolf,
          isFavorite: true,
          gameType: "New",
        },
        {
          id: 4,
          title: "Book of Egypt",
          image: Egypt,
          isFavorite: false,
          gameType: "Other",
        },
        {
          id: 5,
          title: "Pirates Power",
          image: Pirate,
          isFavorite: true,
          gameType: "New",
        },
        {
          id: 6,
          title: "Crocodile Blitz",
          image: Crocodile,
          isFavorite: false,
          gameType: "Other",
        },
        {
          id: 7,
          title: "Anaconda Wild",
          image: Anaconda,
          isFavorite: false,
          gameType: "New",
        },
        {
          id: 8,
          title: "Maya Jackpot",
          image: Maya,
          isFavorite: false,
          gameType: "Jackpot",
        },
        {
          id: 9,
          title: "Beach Life",
          image: Beach,
          isFavorite: false,
          gameType: "New",
        },
        {
          id: 10,
          title: "Inca Jackpot",
          image: Inca,
          isFavorite: false,
          gameType: "Jackpot",
        },
        {
          id: 11,
          title: "Pride of Persia",
          image: Persia,
          isFavorite: false,
          gameType: "Other",
        },
      ]);
    }, 2000); // 2-second delay to simulate API call
  });
};
