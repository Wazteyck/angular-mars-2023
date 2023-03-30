import { interval, Observable, of, take } from "rxjs";

const observer = {
  next: (x) => {
    console.log(x);
  },
  complete: () => {
    console.log("complete");
  },
  error: (err) => {
    console.log("err: " + err.stack);
  },
};

//of(1, "test", { a: 45 }).subscribe(observer);

const startWith = (nbr) => (obs) => {
  return new Observable((subscriber) => {
    subscriber.next(nbr);
    const subscription = obs.subscribe(subscriber);

    return () => {
      subscription.unsubscribe();
    };
  });
};

interval(100).pipe(startWith(12), take(10)).subscribe(observer);
