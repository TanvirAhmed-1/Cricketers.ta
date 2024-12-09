import "./player.css";
import { PropTypes } from "prop-types";

const Player = ({ player, coinBalance, choosePlayer }) => {
  const { name, img, rating, country, batting_style, role, price } = player;

  const chosePlayer = () => {
    coinBalance(price);
    choosePlayer(player);
  };

  return (
    <div>
      <div className="border-2 border-gray-400 rounded-xl p-4 w-full mx-auto">
        <div className=" grid justify-center items-center">
          <img
            className=" bg-cover w-[350px] h-[250px] rounded-xl "
            src={img}
            alt=""
          />
        </div>

        <div className=" grid gap-2 my-4 px-1">
          <div className="flex justify-start items-center gap-2">
            <img
              className="w-12 ml-[-5px]"
              src="https://img.icons8.com/?size=100&id=4kuCnjaqo47m&format=png&color=000000"
              alt=""
            />
            <h3 className=" text-xl font-semibold ">{name}</h3>
          </div>
          <div className="flex justify-between">
            <div className="flex  justify-start items-center gap-2">
              <img
                className="w-8"
                src="https://img.icons8.com/?size=100&id=8ktJZMCbXBSL&format=png&color=000000"
                alt=""
              />
              <p>{country}</p>
            </div>
            <span className="px-2 py-1 bg-gray-400 rounded-xl">{role}</span>
          </div>
          <hr></hr>
          <div className="flex justify-between items-center">
            <div>Rating</div>
            <span>{rating}</span>
          </div>

          <div className="flex justify-between items-center">
            <p>Batting Style</p>
            <p>{batting_style}</p>
          </div>

          <div className="flex justify-between items-center">
            <p>Price: {price}</p>
            <button
              onClick={chosePlayer}
              className="font-normal text-sm text-black px-2 py-3 rounded-xl bg-gradient-to-r from-green-400 from-red-400 to-red-600 "
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Player.propTypes = {
  player: PropTypes.object,
  coinBalance: PropTypes.func,
  choosePlayer: PropTypes.func,
};
export default Player;
