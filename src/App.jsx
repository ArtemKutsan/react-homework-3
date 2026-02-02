import './App.css';
import Rating from './components/rating';
import List from './components/list';

function App() {
  return (
    <>
      <main>
        <div className="container">
          <h1>React - Homework 3</h1>

          <h2>Задание 1: Рейтинг</h2>
          <Rating />

          <h2>Задание 2: Список приглашенных</h2>
          <List />
        </div>
      </main>
    </>
  );
}

export default App;
