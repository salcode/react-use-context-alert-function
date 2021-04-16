import './App.css';
import Body from './components/Body/';

function sayHello() {
  alert('hello');
}

function App() {
  return (
    <div className="App">
      <Body>
        <button onClick={sayHello}>Say hi</button>
      </Body>
    </div>
  );
}

export default App;
