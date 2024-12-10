import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Header/Footer/Footer";
import Header from "./components/Header/Header";
import Player from "./components/player/Player";
import Playerselect from "./components/Select/Playerselect";
import { toast } from "react-toastify";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/Details.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.players));
  }, []);

  // coin function
  const [coin, setCoin] = useState(0);

  const coinBalance = (coin) => {
    setCoin(coin);
    console.log(coin);
  };

  //chocs player list

  const [players1, setplayer1] = useState([]);

  const choosePlayer = (player) => {
    if (!players1.some((p) => p.id === player.id)) {
      const newplayer = [...players1, player];
      setplayer1(newplayer);
      if (players1.slice(0, 7).length < 6) {
        toast.success("Player is successfully added");
      }
      // toast.success("Player is successfully added")
    } else {
      toast.error(`Player ${player.name} has already been added.`);
    }
  };

  // duplicate player in array remove
  
  const removeplaye = (id) => {
    const removeplayer1 = players1.filter((players1) => players1.id !== id);
    setplayer1(removeplayer1);
    if (removeplayer1) {
      toast.success("Successfully Deleted Player");
    }
  };

  // section hidden and show

  const [show, setshow] = useState(false);

  useEffect(() => {
    if (players1.slice(0, 7).length > 6) {
      toast.error("You already added 6 player");
    }
  }, [players1, players1.length]);

  return (
    <>
      <Header coinheader={coin}></Header>

      <div>
        <div className="flex justify-between items-center my-10 lg:mx-0 mx-4">
          {/* <h1 className='text-2xl font-semibold'>Available Players</h1> */}
          <h1 className="text-2xl font-semibold">
            {!show
              ? "Available Players"
              : `Selectted playe (${players1.slice(0, 6).length}/6)`}
          </h1>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setshow(false)}
              className="px-4 py-2 bg-gradient-to-r from-green-500 via-red-700 to-green-600 rounded-xl text-white"
            >
              Available
            </button>
            <button
              onClick={() => setshow(true)}
              className="px-4 py-2 bg-gradient-to-r from-green-500 via-red-700 to-green-600 rounded-xl text-white"
            >
              Selected {players1.slice(0, 6).length}
            </button>
          </div>
        </div>
      </div>

      {show ? (
        <div className="relative h-[820px] mx-auto pt-7">
          <Playerselect
            coinBalance={coin}
            removeplaye={removeplaye}
            players={players1}
          ></Playerselect>

          <div className="absolute bottom-0 left-0 pb-8">
            <button
              onClick={() => setshow(false)}
              className="text-white font-medium text-xl bg-gradient-to-r from-green-500 via-red-700 to-green-600 px-6 py-3 text-start rounded-xl"
            >
              Add More Player
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 mb-36 lg:gap-2 gap-3 md:grid-cols-2">
          {players.map((player, index) => (
            <Player
              key={index}
              coinBalance={coinBalance}
              choosePlayer={choosePlayer}
              alert={alert}
              player={player}
            ></Player>
          ))}
        </div>
      )}

      <Footer></Footer>
    </>
  );
}

export default App;
