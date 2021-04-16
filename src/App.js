import './App.css';
import Body from './components/Body/';
import Sidebar from './components/Sidebar/';
import Button from './components/Button/';

function sayHello() {
  alert('hello');
}

function App() {
  return (
    <div className="App">
      <Body>
        <Sidebar>
          <Button sendAlert={sayHello}>Say hi</Button>
        </Sidebar>
      </Body>
    </div>
  );
}

export default App;
