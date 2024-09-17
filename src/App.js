import './App.css'
import Riddle from "./Pages/Riddle";
// const word = 'book'

//const word = 'car'
const word = 'синтезатор'
// const word = 'quadrocopter'
function App() {
  return (
    <div className="App">
      <Riddle askedWord={word}/>
    </div>
  );
}

export default App;
