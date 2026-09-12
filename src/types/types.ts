import type { Dispatch, SetStateAction } from "react";

export interface IPlayer {
    playerName: string;
    playerImg: string;
    origin: string;
    playerType: string;
    bowlingStyle: string;
    battingStyle: string;
    price: number;
}

export interface IPlayerPromiseProps {
    playerDataPromise: Promise<IPlayer[]>,
    coin: number,
    setCoin: Dispatch<SetStateAction<number>>
}