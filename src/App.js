import './App.css';
import React, { useState }  from 'react'
import Place from './pages/place/Place';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/home/Home';
import { ConnectToWallet } from './component/connectTowallet/ConnectToWallet';

function App() {

  const [toggled, setToggled] = useState(false)
  const [displayCancel, setDisplayCancel] = useState(false)
  const [walletToggled, setWalletToggled] = useState(false)

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(true)
    setWalletToggled(false)
  }

  const handleToggleMenu = () => {
      setToggled(true)
      setDisplayCancel(true)
  }
  const handleToggleCancel = () => {
      setDisplayCancel(false)
      setToggled(false)
  }

  const handleWalletToggled = () => {
      setWalletToggled(true)
      setToggled(false)
      setDisplayCancel(false)
  }

  return (
    <div className="App">
      <ConnectToWallet toggle={walletToggled} handleClick={handleClick} click={click} />
      <Routes>
        <Route path="/" element={<Home toggled={toggled} displayCancel={displayCancel} walletToggled={walletToggled} toggleHandler={handleToggleMenu} cancelhandler={handleToggleCancel} walletToggledHandler={handleWalletToggled} opaque={walletToggled} />}></Route>

        <Route path="place" element={<Place toggled={toggled} displayCancel={displayCancel} walletToggled={walletToggled} toggleHandler={handleToggleMenu} cancelhandler={handleToggleCancel} walletToggledHandler={handleWalletToggled} opaque={walletToggled} />}></Route>       
      </Routes>

    </div>
  );
}

export default App;
