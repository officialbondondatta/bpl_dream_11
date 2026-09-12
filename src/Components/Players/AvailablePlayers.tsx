import type { IPlayer } from "../../types/types";
import { type Dispatch, type SetStateAction } from "react";
import PlayerCard from "./PlayerCard";

interface IPlayerProps {
    availablePlayers: IPlayer[],
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
    selectedPlayers: IPlayer[],
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>
}

const AvailablePlayers = ({ availablePlayers, coin, setCoin, selectedPlayers, setSelectedPlayers }: IPlayerProps) => {

    return (
        <>
            {
                availablePlayers.map((player, index) => (
                    <PlayerCard selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} key={index} coin={coin} setCoin={setCoin} player={player}></PlayerCard>
                ))
            }
        </>
    );
};

export default AvailablePlayers;