/* 安装+配置： 
npm init
npm i --save-dev typescript
npx tsc
修改tsconfig.json
*/
function sumTwo(num1: number, num2: number) {
  console.log(`num1:${num1}  num2:${num2}`);
  return num1 + num2;
}
let result: number = sumTwo(1, 2);
console.log("result is :", result);

interface Person {
  name: string;
  age: number;
}
let person1: Person = {
  name: "aaa",
  age: 20,
};
function greet(person1: Person) {
  console.log(`Hello ${person1.name} you are ${person1.age} !`);
}
greet(person1);

// CALLBACK回调函数
function fetchData(url: string, callback: any) {
  console.log(`CALLBACK: Fetching data from ${url}...`);

  // Simulate a 2-second delay (like a network request)
  setTimeout(() => {
    const data = `Data from ${url}`;
    callback(data); // Call the callback function with the data
  }, 2000);
}

fetchData("https://example.com/api", function (result: any) {
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
function fetchData2(url: string) {
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

fetchData2("https://example.com/api")
  .then((data) => {
    console.log("PROMISE ✅ Received:", data);
  })
  .catch((error) => {
    console.error("PROMISE⚠️ Error:", error);
  });

//ASYNC-AWAIT
async function loadData(url: string) {
  try {
    const data = await fetchData2(url);
    console.log("AWAIT:✅ Received:", data);
  } catch (error) {
    console.error("AWAIT⚠️ Error:", error);
  }
}
loadData("https://example.com/api");
loadData("kjkljjk;j"); //模拟错误的URL
/*
Step	Explanation
1️⃣	async function loadData(url) defines an asynchronous function.
2️⃣	await fetchData(url) pauses execution until the Promise resolves or rejects.
3️⃣	If the Promise resolves, data contains the fetched value.
4️⃣	If the Promise rejects, the control jumps to the catch block.
5️⃣	try/catch handles both success and failure in a synchronous-looking style.
*/
