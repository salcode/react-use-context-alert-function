import './App.css';
import Body from './components/Body/';
import Sidebar from './components/Sidebar/';
import Button from './components/Button/';

function App() {
  return (
    <div className="App">
      <Body>
        <Sidebar>
          <Button>Say hi</Button>
        </Sidebar>
      </Body>
    </div>
  );
}

export default App;
