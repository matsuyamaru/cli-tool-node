const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,  // 標準入力
  output: process.stdout // 標準出力
});

/*
// Enterキー押下で読み込み
reader.on('line', line => {
  console.log(line);
  reader.prompt();
});

// ctrl+Cで終了
reader.on('close', () => {
  console.log("finish");
});
*/

// readr.question()は戻り値のない非同期関数なのでasync関数でラップできない。(util.promisify()を使うとasync/awaitで使えるらしい。)
// Promiseでラップしてreader.question()に登録したコールバック内でresolve()を実行する。
const question1 = () => {
  return new Promise((resolve, reject) => {
    reader.question('q1 What do you think of GitHub? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    reader.question('q2 What do you think of Manga? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`)
      resolve()
    })
  })
}

(async()=>{
	await question1();
	await question2();
	reader.close();
})()

