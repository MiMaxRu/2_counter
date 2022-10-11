import './App.css';
import React from 'react'; //подключаем библиотеку React
function App() {

  const [score, setScore] = React.useState(0)//создадим переменную score

  const onClickPlus = () => {
    setScore(score + 1)//увеличим значение score на 1
  }
  const onClickMinus = () => {
    setScore(score - 1)//уменьшим значение score на 1
  }

  return (
    <div className="App">
      <div>
        <h2>Счётчик</h2>
        <h1>{score}</h1> {/*вывод значения переменной score*/}
        <button onClick={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}
export default App;
