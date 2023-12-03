import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <h1>hello bhailog </h1>
      <Header/>
      
      <div className="app-body">
        <Sidebar/>
      </div>

      {/* react router -> chat screen */}

    </div>
  );
}

export default App;
