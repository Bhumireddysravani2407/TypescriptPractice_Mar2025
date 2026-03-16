async function getMessage(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {        
        resolve("Hello Playwright")
      },
       5000)
    })
}

async function test() {
  const message = await getMessage();
  console.log(message);
}

 test();


// Function that returns a promise
function prepareCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let coffeeReady = true;
      if (coffeeReady) {
        resolve("Coffee is ready ☕");
      } else {
        reject("Coffee machine error");
      }
    }, 2000);
  });
}

// Async function
async function startMachine() {
 
    console.log("Starting coffee machine...");
    const result = await prepareCoffee(); // wait for promise to complete

    console.log(result);
    console.log("Serving coffee...");
   
  }

startMachine();
