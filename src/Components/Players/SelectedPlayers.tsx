import { MdDelete } from "react-icons/md";
import type { IPlayer } from "../../types/types";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface ISelectedPlayersProps {
    players: IPlayer[],
    setSelectedPlayers: Dispatch<SetStateAction<IPlayer[]>>
}
const SelectedPlayers = ({ players, setSelectedPlayers }: ISelectedPlayersProps) => {
    const handlePlayers = (player: IPlayer) => {
        const newSelectedPlayers = players.filter(p => p != player)
        setSelectedPlayers(newSelectedPlayers)
        toast.success(`${player.playerName} deleted`)
    }
    return (
        <div className="col-span-3 flex w-full flex-col gap-5 mb-20 p-5 mt-5">
            {
                players.map((player, index) => (
                    <div key={index} className="rounded-xl w-full border border-slate-400 p-5 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div>
                                <img src={player.playerImg} width={80} height={80} alt="player image" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                        </div>
                        <div>
                            <button type="button" onClick={() => handlePlayers(player)} className="text-red-500"><MdDelete className="text-2xl cursor-pointer" /></button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default SelectedPlayers;