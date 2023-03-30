const rxjs = require("rxjs");

const { Observable, throwError } = rxjs;

// Old version unused now
const obs = new Observable((subscriber) => {
  subscriber.next(12);
  subscriber.next("Hello World!");
  subscriber.next({ a: "11" });

  // Error or complete, not both
  //subscriber.error(new Error("Error happend"));
  // Not execute
  subscriber.complete();
});

const obsError = throwError(new Error("Error happend!"));

const obs2 = new Observable((subscriber) => {
  subscriber.next(0);

  const timer = setTimeout(() => {
    subscriber.next(1);
    subscriber.complete();
    console.log("end setTimeOut()");
  }, 1000);

  return () => {
    console.log("unsubstribing");
    clearTimeout(timer);
  };
});

const subscription = obs2.subscribe({
  next: (x) => {
    console.log(x);
  },
  complete: () => {
    console.log("complete");
  },
  error: (err) => {
    console.log("err: " + err.stack);
  },
});

setTimeout(() => {
  subscription.unsubscribe();
}, 500);
