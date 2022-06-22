/** @format */

import { useState } from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import AppSearch from "./components/AppSearch";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./data/tattoos";


function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchTest] = useState('');

  function onTattooOpenClick(theTattoo) {
    setSelectedTattoo(theTattoo);
  }

  function onTattooCloseClick() {
    setSelectedTattoo(null)
  }

  // const filteredTattoos = tattoos.filter((tattoo) => { 
  //   return tattoo.title.includes(searchText)
  // })

  // const tattooElements = tattoos.map((tattoo, index) => {
  //   return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick}/>
  // }) 

    // const tattooElements = filteredTattoos.map((tattoo, index) => {
  //   return <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpenClick}/>
  // }) 

  const tattooElements = tattoos.filter((tattoo) => { 
    return tattoo.title.includes(searchText)
  }).map((tattoo, index) => {
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
        <AppSearch value={searchText} onValurChange={setSearchTest}/>
      </div>
      <div className="app-grid">
        {tattooElements}
      </div>
      {tattooPost}

    </>
  );
}

export default App;
