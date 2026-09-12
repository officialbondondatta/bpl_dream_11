import type { IPlayer } from "../../types/types";
import { type Dispatch, type SetStateAction } from "react";
import PlayerCard from "./PlayerCard";

interface IPlayerProps {
    availablePlayers: IPlayer[],
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}

const AvailablePlayers = ({ availablePlayers, coin, setCoin }: IPlayerProps) => {

    return (
        <>
            {
                availablePlayers.map((player, index) => (
                    <PlayerCard key={index} coin={coin} setCoin={setCoin} player={player}></PlayerCard>
                ))
            }
        </>
    );
};

export default AvailablePlayers;