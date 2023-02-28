import './App.css';
import Top from './components/Top';
import Bottom from './components/Bottom'
import Profile from './components/Profile';
import Login from './components/Login';
import Logout from './components/Logout';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <h1>최상단 화면</h1>
      <Top />
      <Bottom />
      <Profile />
      <Login />
      <Logout />
      <ChangeColor />
    </div>
  );
}

export default App;
