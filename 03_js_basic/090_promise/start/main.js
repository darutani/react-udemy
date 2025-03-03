// 非同期処理（promise）

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 2000);
}).then((b) => {
  console.log(b);
  return b;
}).then((c) => {
  console.log(c);
}).catch(() => {
  console.log('catchが実行')
})
