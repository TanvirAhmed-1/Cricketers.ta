import PropTypes from "prop-types";
import Select from "./Select";

const Playerselect = ({ players, removeplaye }) => {
  return (
    <div>
      <div className="grid gap-5 h-28">
        {players.slice(0, 6).map((player) => (
          <Select
            key={players.id}
            players={player}
            removeplaye={removeplaye}
          ></Select>
        ))}
      </div>
    </div>
  );
};
Playerselect.propTypes = {
  players: PropTypes.array,
  removeplaye: PropTypes.func,
};
export default Playerselect;
