import { FaFlag, FaRegUserCircle } from "react-icons/fa";
import type { IPlayer } from "../../types/types";

const AvailablePlayers = ({ player }: { player: IPlayer }) => {
    return (
        <div className="card bg-base-100 shadow-sm  mt-10">
            <figure>
                <img
                    className="p-10 w-90"
                    src={player.playerImg}
                    alt="player image" />
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title"><FaRegUserCircle />{player.playerName}</h2>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <FaFlag />
                        <p>{player.origin}</p>
                    </div>
                    <div>
                        <button className="btn">{player.playerType}</button>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="space-y-3">
                    <h2 className="font-semibold text-lg">Rating</h2>
                    <div className="flex items-center justify-between">
                        <h2>{player.battingStyle}</h2>
                        <h2>{player.bowlingStyle}</h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold">Price: ${player.price}</h2>
                        <button className="btn">Choose Player</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AvailablePlayers;