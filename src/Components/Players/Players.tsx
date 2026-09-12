import { use, useState } from "react";
import type { IPlayerPromiseProps } from "../../types/types";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";

const Players = ({ playerDataPromise }: IPlayerPromiseProps) => {
    const playersData = use(playerDataPromise)
    const [buttonType, setButtonType] = useState("available")

    const handleButtonType = (type: "available" | "selected") => {
        setButtonType(type)
    }
    return (
        <div className="mt-10 container mx-auto">
            <div className="flex justify-between">
                <h2 className="font-bold text-xl">{buttonType === "available" ? "Available Players" : "Selected Players"}</h2>
                <div className="flex">
                    <button onClick={() => handleButtonType("available")} className={`btn rounded-r-none px-7 ${buttonType === "available" ? "btn-success" : " "}`}>Available</button>
                    <button onClick={() => handleButtonType("selected")} className={`btn rounded-l-none px-7 ${buttonType === "selected" ? "btn-success" : ""}`}>Selected</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-10">
                {
                    buttonType === "available" ?
                        <AvailablePlayers availablePlayers={playersData}></AvailablePlayers>
                        :
                        <SelectedPlayers></SelectedPlayers>
                }


            </div>

        </div >
    );
};

export default Players;