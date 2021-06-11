import React from 'react';
/* import { Observable } from 'rxjs'; */
import './App.css';

/* const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe'); */

const App = () => {
  const [seconds, setSeconds] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [timerId, setTimerId] = React.useState(null);
  const [isStart, setIsStart] = React.useState(false);

  const addHours = () => {
    setHours((prev) => prev + 1);
  }

  const addMinutes = () => {
    if (minutes < 59) {
      setMinutes((prev) => prev + 1);
    } else {
      setMinutes(0);
      addHours();
    }
  }

  const startTimer = () => {
    setTimerId(setInterval(() => {
    setSeconds((prevState) => {
      if (prevState < 59) {
        return prevState + 1;
      }
      addMinutes();
      return 0;
    })
    }, 1000));
  }

  const stopTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setHours(0);
    clearInterval(timerId);
  }

  let counter = 0;
  let isSecondClick = false;
  const waitTimer = () => {
    if (isSecondClick) {
      const localTimerId = setInterval(() => {
        counter+=50;
      }, 50);
      if (counter <= 300) {
        setIsStart(false);
        clearInterval(timerId);
      }
      clearInterval(localTimerId);
    }
    isSecondClick = true;
  }

  const toggleTimer = () => {
    if (!isStart) {
      startTimer();
      setIsStart(true);
    } else {
      stopTimer();
      setIsStart(false);
    }
  }

  const resetTimer = () => {
    stopTimer();
    startTimer();
    setIsStart(true);
  }
  return (
    <section className="stopwatch">
      <div className="container">
        <div className="stopwatch__content">
          <div className="stopwatch__time">
            <span>{hours <=9 ? '0' + hours : hours}</span>
            <span>:</span>
            <span>{minutes <=9 ? '0' + minutes : minutes}</span>
            <span>:</span>
            <span>{seconds <=9 ? '0' + seconds : seconds}</span>
          </div>
          <div className="stopwatch__btns">
            <button className="stopwatch__btn" onClick={toggleTimer}>Start/Stop</button>
            <button className="stopwatch__btn" onClick={waitTimer}>Wait</button>
            <button className="stopwatch__btn" onClick={resetTimer}>Reset</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;

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