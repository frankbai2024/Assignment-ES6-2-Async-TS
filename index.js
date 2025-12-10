"use strict";
/* 安装+配置：
npm init
npm i --save-dev typescript
npx tsc
修改tsconfig.json
*/
function sumTwo(num1, num2) {
  console.log(`num1:${num1}  num2:${num2}`);
  return num1 + num2;
}
let result = sumTwo(1, 2);
console.log("result is :", result);
let person1 = {
  name: "aaa",
  age: 20,
};
function greet(person1) {
  console.log(`Hello ${person1.name} you are ${person1.age} !`);
}
greet(person1);

// CALLBACK
// Define the fetchData function
function fetchData(url, callback) {
  console.log(`CALLBACK: Fetching data from ${url}...`);
  // Simulate a 2-second delay (like a network request)
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data); // Call the callback function with the data
  }, 2000);
}
// Example usage
fetchData("https://example.com/api", function (result) {
  //匿名函数（anonymous function）
  console.log("CALLBACK: ✅ Received:", result);
});
// 步骤	说明
//1️⃣	调用 fetchData()，并传入一个函数当作 callback
//2️⃣	fetchData 先打印 “Fetching data...”
//3️⃣	2 秒后 setTimeout 触发，得到 data
//4️⃣	fetchData 调用 callback(data)
//5️⃣	这时执行你传入的 function(result)，此时 result = data
//6️⃣	打印出 "✅ Received: Data from https://example.com/api"
//PROMISE/THEN
function fetchData2(url) {
  console.log(`PROMISE: Fetching data from ${url}...`);
  return new Promise((resolve, reject) => {
    // If url is empty or invalid, reject the Promise immediately
    if (!url) {
      reject("PROMISE❌ Invalid URL");
      return;
    }
    // Simulate a 2-second delay (like a real API)
    setTimeout(() => {
      const data = `Data from ${url}`;
      resolve(data); // fulfill the Promise successfully
    }, 2000);
  });
}
// Example usage:
fetchData2("https://example.com/api")
  .then((data) => {
    console.log("PROMISE ✅ Received:", data);
  })
  .catch((error) => {
    console.error("PROMISE⚠️ Error:", error);
  });
//ASYNC-AWAIT
async function loadData(url) {
  try {
    const data = await fetchData2(url);
    console.log("AWAIT:✅ Received:", data);
  } catch (error) {
    console.error("AWAIT⚠️ Error:", error);
  }
}
loadData("https://example.com/api");
loadData("");//模拟无效链接
