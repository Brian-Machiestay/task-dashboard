import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Mainpage from './components/main/mainpage';


function App() {
  return (
    <div className='home'>
      <Sidebar />
      <Mainpage />
    </div>
  );
}

export default App;
