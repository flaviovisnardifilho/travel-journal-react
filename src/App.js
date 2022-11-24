import './App.css';
import { Card } from './components/Card';
import { NavBar } from './components/NavBar';
import { data } from './data';

function App() {
  const cards = data.map((card) => {
    return (
    <><Card key={card.key} {...card} /><hr class="solid"></hr></>);
  });
  return (
    <div className="App">
      <NavBar />
      <section className="cards-container">{cards}</section>
    </div>
  );
}

export default App;
