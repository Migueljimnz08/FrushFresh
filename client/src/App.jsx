import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <BrowserRouter> 
        <Header/>
        <Main className='main'/>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
