import './App.css'
import Riddle from "./Pages/Riddle";
const word = 'computer'
function App() {
  return (
    <div className="App">
      <Riddle askedWord={word}/>
    </div>
  );
}

export default App;
