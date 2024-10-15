import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Carts from './components/Main/Carts/Carts';
import Cooking from './components/Main/Cooking/Cooking';
import Main from './components/Main/main'
import Cookings from './components/Main/Cooking/Cooking';

function App() {

  const [cookings, setCookings] = useState([]);

    const handleCooks = cart => {
       const newCooking = [...cookings, cart];
       setCookings(newCooking)
    }

  return (
    <>
      <Header></Header>
      <Main></Main>
      <div className='flex mt-10 w-[1400px] mx-auto'>
        <Carts
        handleCooks={handleCooks}
        ></Carts>
        <Cookings
        cookings={cookings}
        ></Cookings>
      </div>
    </>
  )
}

export default App;
