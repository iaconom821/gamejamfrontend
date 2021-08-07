import './App.css';
import GameArea from "./components/GameArea";
import Dpad from "./components/Dpad";

function App() {
  return (
    <div className="App">
        <div className="outergrid">
          <div className ="innergrid one">
            <div></div>
            <div className ="currentscore"></div>
            <div></div>
            <div className ="level"></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="innergrid two">
            <GameArea /> 
            <Dpad />
          </div>
          <div className="innergrid three">
            <div className="next"></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="innergrid four">
            <div className="leaderboard highscore"></div>
            <div className="leaderboard"></div>
            <div className="leaderboard topten"></div>
          </div>
        </div>
    </div>
  );
}

export default App;
