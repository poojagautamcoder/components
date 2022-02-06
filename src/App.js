import logo from './logo.svg';
import './App.css';
import Latestexam from './components/Latestexam';
import Jobs from './components/Jobs';
import TrendingTopics from './components/TrendingTopics';

function App() {
  return (
    <div className="App">
<Latestexam/>
<Jobs/>
<TrendingTopics/>
    </div>
  );
}

export default App;
