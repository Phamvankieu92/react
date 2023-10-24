import logo from './logo.svg';
import './App.scss';
import MyComponent from './Examples/MyComponent';
/**
 * 2 components: class components/ function components (function, arrow)
 * 
 * 
 * 
 * 
 * */

function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Phạm Văn Kiểu nè!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;


