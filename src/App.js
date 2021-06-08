import './App.css';
import { Header } from './Header.js';
import  { Body } from './Body.js';
import  { Footer } from './Bottom.js';
import data from './data.js';


function App() {
  return (
    <>
      <Header/>
      <Body data={data}/>
      <Footer/>
    </>
  );
}

export default App;
