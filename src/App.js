import { BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Introduce from "./Pages/introduce/Introduce";
import Quiz from "./Pages/quiz/Quiz";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Introduce/>}/>
          <Route path="/quiz/:difficulty/:amount" element={<Quiz/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
