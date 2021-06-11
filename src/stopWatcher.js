import { Observable } from "rxjs";

export const createStopwatch = (control, interval = 1000) => {
  return new Observable(observer => {
    let count = 0;
    let tickerId = null;

    const clearTicker = () => {
      if (tickerId != null) {
        clearTimeout(tickerId);
        tickerId = null;
      }
    }
    const setTicker = () => {
      const recursiveTicker = () => {
        tickerId = setTimeout(() => {
          if (count <= 59) {
            observer.next(count++);
          } else {
            count = 0;
          }
          recursiveTicker();
        }, interval);
      }
      clearTicker();
      if (count <= 59) {
        observer.next(count++);
      } else {
        count = 0;
      }
      recursiveTicker();
    }

    control.subscribe({
      next: input => {
        if (input === "START" && tickerId == null) {
          setTicker();
        } else if (input === "STOP") {
          clearTicker();
        } else if (input === "RESET") {
          count = 0;
          if (tickerId != null) {
            setTicker();
          }
        }
      },
      complete: () => {
        clearTicker();
        observer.complete();
      },
      error: err => {
        clearTicker();
        observer.error(err);
      }
    });

    return { unsubscribe: () => clearTicker() };
  });
}