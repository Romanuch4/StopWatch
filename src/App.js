import './App.css';
/*
Реализовать секундомер, который подсчитывает время в формате «HH: MM: SS»

Секундомер должен иметь следующие кнопки:

* «Start / Stop» - запуск / остановка отсчета времени, останавливает и обнуляет значение таймера.

* «Wait» - работает на двойной клик (время между нажатиями не более 300 мс!) таймер должен прекратить отсчет времени; если после него нажать старт, то возобновляется отсчет.

* «Reset» - сброс секундомера  на 0.  Обнуляет секундомер и снова начинает отсчет.

Требования:

 - используйте Observables в коде

 - RxJS подход

 - функциональный подход

 - нам важнее всего увидеть Ваше умение писать код

- 300 млс – это не DoubleClick

 

Просьба прислать ответ ссылкой на гитхаб.
*/
const App = () => {
  return (
    <section className="stopwatch">
      <div className="container">
        <div className="stopwatch__content">
          <div className="stopwatch__time">00:00:00</div>
          <div className="stopwatch__btns">
            <button className="stopwatch__btn">Start/Stop</button>
            <button className="stopwatch__btn">Wait</button>
            <button className="stopwatch__btn">Reset</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
