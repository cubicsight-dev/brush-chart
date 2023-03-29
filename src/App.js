import logo from './logo.svg';
import './App.css';
import BrushChart from './components/BrushChart';
import TopBar from './components/TopBar';

const App = () => {
  return (
    <div className="App">
        <TopBar />
        <div style={{height: '70vh', overflow: 'auto'}}>
            
            <BrushChart />
        </div>
    </div>
  );
}

export default App;
