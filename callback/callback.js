// function outputText(callback) {
//   console.log(callback);
//   callback('Alice');
// }
//
// outputText((msg) => {
//   console.log('受け取ったテキスト: ', msg);
// })

// => [Function (anonymous)]
//    受け取ったテキスト:  Alic

function parentFunction(arg, callback) {
  const result = arg * 2;

  callback(result);
}

function displayResult(value) {
  console.log('計算結果: ', value);
}

parentFunction(10, displayResult);

parentFunction(5, (data) => {
  console.log(`結果を 2 で割ると: ${data / 2}`);
});
