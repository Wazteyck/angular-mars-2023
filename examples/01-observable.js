const rxjs = require("rxjs");

const { Observable } = rxjs;

const obs = new Observable((subscriber) => {
  subscriber.next(12);
  subscriber.next("Hello World!");
  subscriber.next({ a: "11" });
  subscriber.error(new Error("Error happend"));

  subscriber.complete();
});

obs.subscribe({
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
