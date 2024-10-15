import './App.css'
import Header from './components/Header/Header'
import Carts from './components/Main/Carts/Carts';
import Cooking from './components/Main/Cooking/Cooking';
import Main from './components/Main/main'

function App() {

  return (
    <>
      <Header></Header>
      <Main></Main>
      <div className='flex mt-10 w-[1400px] mx-auto'>
        <Carts></Carts>
        <Cooking></Cooking>
      </div>
    </>
  )
}

export default App;
