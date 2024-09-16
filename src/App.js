import "./App.css";
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
        Hello World!
        <Menu name="Banana" price="10$" />
        <Menu name="Apple" price="20$" />
        <Menu name="Pineapple" price="15$" />
    </div>
  );
}

export default App;
