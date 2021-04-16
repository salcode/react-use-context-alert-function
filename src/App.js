import './App.css';

function sayHello() {
  alert('hello');
}

function App() {
  return (
    <div className="App">
      <button onClick={sayHello}>Say hi</button>
    </div>
  );
}

export default App;
