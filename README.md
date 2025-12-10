Part 1: Callbacks
Create a function fetchData that simulates fetching data from a server. This function should take two arguments: a url (string) and a callback function. Use setTimeout to simulate a delay of 2 seconds before calling the callback function with the fetched data.
Instructions:
The fetchData function should print "Fetching data from [url]..." when it starts.
After 2 seconds, it should call the callback function with the data: "Data from [url]".

Part 2: Promises
Refactor the fetchData function to return a promise instead of using a callback.
Instructions:
The function should still simulate a 2-second delay before resolving the promise with the data: "Data from [url]".
If the url is empty or not provided, reject the promise with an error message: "Invalid URL".

Part 3: Async/Await
Refactor the code to use async/await to fetch data and handle errors.
Instructions:
Create an async function named loadData that calls fetchData with a given url.
Use try/catch to handle any errors that occur during the data fetching process.

console log only
<img width="876" height="598" alt="image" src="https://github.com/user-attachments/assets/439a01c8-e4e1-4ed0-9d41-39d33516ce36" />
