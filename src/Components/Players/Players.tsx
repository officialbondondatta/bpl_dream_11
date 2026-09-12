import { use } from "react";
import type { IPlayerPromiseProps } from "../../types/types";
import AvailablePlayers from "./AvailablePlayers";

const Players = ({ playerDataPromise }: IPlayerPromiseProps) => {
    const playersData = use(playerDataPromise)
    return (
        <div className="mt-10 container mx-auto">
            <div className="flex justify-between">
                <h2 className="font-bold text-xl">Available Players</h2>
                <div className="flex">
                    <button className="btn btn-success rounded-r-none px-7">Available</button>
                    <button className="btn  rounded-l-none px-7">Selected</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10">
                {playersData.map((player, index) => (
                    <AvailablePlayers key={index} player={player}></AvailablePlayers>
                ))}
            </div>

        </div>
    );
};

export default Players;