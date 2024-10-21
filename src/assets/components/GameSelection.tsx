import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faFire,
  faStar,
  faCirclePlus,
  faDiceThree,
  faVideo,
  faDiceSix,
  faCreditCard,
  fa7,
  faBorderAll,
  faTableCells,
} from "@fortawesome/free-solid-svg-icons";

import { fetchGame } from "../MockApi";

import Spinner from "./Spinner";
import AlertMessage from "./AlertMessage";

interface Game {
  id: number;
  title: string;
  image: string;
  isFavorite: boolean;
  gameType: string;
}

const GameSelection = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  let [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [selectedGameType, setSelectedGameType] = useState<string>("All");

  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchGame()
      .then((data) => {
        setGames(data);
        setFilteredGames(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error on fetching Data.", error);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id: number) => {
    setFilteredGames((prevGames) =>
      prevGames.map((game) =>
        game.id === id ? { ...game, isFavorite: !game.isFavorite } : game
      )
    );
  };

  const filterByGameType = (type: string) => {
    setSelectedGameType(type);
    if (type === "All") {
      setFilteredGames(games);
    } else {
      setFilteredGames(games.filter((game) => game.gameType === type));
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredGames(games);
    } else {
      setFilteredGames(
        games.filter((game) =>
          game.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <div className="container-fluid">
        <div className="align-items-center d-flex text-center overflow-scroll game-type-container">
          <div className="search-container">
            <a
              className="text-secondary"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fs-1" />
              <p>Search</p>
            </a>
          </div>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("All")}
          >
            <FontAwesomeIcon icon={faFire} className="fs-1" />
            <p>Start</p>
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("New")}
          >
            <FontAwesomeIcon icon={faCirclePlus} className="fs-1" />
            <p>New</p>
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("Slots")}
          >
            <FontAwesomeIcon icon={faDiceThree} className="fs-1" />
            <p>Slots</p>
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("Live")}
          >
            <FontAwesomeIcon icon={faVideo} className="fs-1" />
            <p>Live</p>
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("Jackpot")}
          >
            <FontAwesomeIcon icon={faDiceSix} className="fs-1" />
            <p>Jackpot</p>
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("Card")}
          >
            <FontAwesomeIcon icon={faCreditCard} className="fs-1" />
            <p>Card</p>
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("Bingo")}
          >
            <FontAwesomeIcon icon={fa7} className="fs-1" />
            <p>Bingo</p>
          </a>
          <a
            href="#"
            className="text-secondary"
            onClick={() => filterByGameType("Other")}
          >
            <FontAwesomeIcon icon={faBorderAll} className="fs-1" />
            <p>Other</p>
          </a>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="row py-2 justify-content-center align-items-center">
            <div className="col-11 position-relative">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="fs-5 position-absolute text-muted input-icon"
              />
              <input
                className="form-control input-padding"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="col-1 p-0">
              <a href="#" className="text-muted">
                <FontAwesomeIcon className="fs-2" icon={faTableCells} />
              </a>
            </div>
          </div>
        </div>
        <div className="game-container">
          <div className="row justify-content-start">
            {filteredGames.length > 0 ? (
              filteredGames.map((game) => (
                <div className="col-4 mt-2">
                  <div className="card border-0 rounded h-120px overflow-hidden">
                    <img
                      src={game.image}
                      className="card-img object-fit-cover w-100 h-100"
                      alt="..."
                    />
                    <div className="card-img-overlay p-0 align-items-end d-flex">
                      <div className="rounded-bottom position-absolute card-diagonal-div bg-transparent-overlay">
                        <div className="reform-div">
                          <a
                            href="#"
                            className="text-white"
                            onClick={() => toggleFavorite(game.id)}
                          >
                            <FontAwesomeIcon
                              icon={faStar}
                              className={"fs-2 ".concat(
                                game.isFavorite ? "text-warning" : ""
                              )}
                            />
                          </a>
                        </div>
                      </div>
                      {/* <div className="bg-overlay rounded-bottom w-100 text-white bg-transparent-overlay">
                      <h4 className="align-self-end">{game.title}</h4>
                    </div> */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <AlertMessage
                alertType="warning"
                message="No Data to show..."
              ></AlertMessage>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameSelection;
