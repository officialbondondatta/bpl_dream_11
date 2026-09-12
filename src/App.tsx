import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Players from "./Components/Players/Players";
import type { IPlayer } from "./types/types";

// const playersPromise: Promise<IPlayer[]> = fetch('/players.json')
//   .then((res) => res.json())

const playersFetch = async (): Promise<IPlayer[]> => {
  const res = await fetch('/players.json')
  const data = await res.json()
  return data
}

function App() {
  const [playersPromise] = useState(() => playersFetch())
  const [coin, setCoin] = useState(5000)
  return (
    <>
      <Nav coin={coin}></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Players coin={coin} setCoin={setCoin} playerDataPromise={playersPromise}></Players>
      </Suspense>
    </>
  )
}

export default App
