import { Suspense } from "react";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Players from "./Components/Players/Players";
import type { IPlayer } from "./types/types";

function App() {
  const playersPromise = async (): Promise<IPlayer[]> => {
    const res = await fetch('/players.json')
    const data = await res.json()
    return data
  }


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Players playerDataPromise={playersPromise()}></Players>
      </Suspense>
    </>
  )
}

export default App
