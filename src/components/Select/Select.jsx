import PropTypes from "prop-types";

const Select = ({ players, removeplaye }) => {
  console.log(players);
  const { id, name, img, batting_style } = players;
  // coinBalance(price);

  return (
    <div>
      <div className=" flex justify-between items-center border-2 border-gray-400 rounded-xl p-2">
        <div className="flex gap-5  justify-start items-center">
          <div>
            <img
              className="w-[80px] rounded-xl  object-cover"
              src={img}
              alt=""
            />
          </div>
          <div>
            <h1>{name}</h1>
            <h1>{batting_style}</h1>
          </div>
        </div>
        <div>
          <button onClick={() => removeplaye(id)}>
            <img
              className=" w-2/6"
              src="https://img.icons8.com/?size=100&id=629QE0a9taSF&format=png&color=000000"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};
Select.propTypes = {
  players: PropTypes.array,
  removeplaye: PropTypes.func,
  coinBalance: PropTypes.func,
};

export default Select;
