/** @format */

import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";


function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);

  function onTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedTattoo(null)
  }

  const tattooElements = tattoos.map((tattoo, index) => {
    return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick}/>
  }) 

  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = <TattooPost tattoo={selectedTattoo} onBgClick={onTattooCloseClick}/>
  }
  return (
    <>
      <div className="App">
        <AppHeader />
        {/* {<button onClick={onTattooOpenClick}>Click</button> } */}
      </div>
      <div className="app-grid">
        {tattooElements}
      </div>
      {tattooPost}

    </>
  );
}

export default App;
