function outputText(callback) {
  console.log(callback);
  callback('Alice');
}

outputText((msg) => {
  console.log('受け取ったテキスト: ', msg);
})

// => [Function (anonymous)]
//    受け取ったテキスト:  Alic
