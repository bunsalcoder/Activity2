// 1- Run this main.js :
// ==> why we have the error : Error: Cannot find module 'axios'

// 2- Check the package.json :   how many dependancies do you see ?

// At first, I see only one dependency. but it does not work.

// 3- Run  : npm install		to install all dependancies

// axios module has be installed.

// 4 - Check now the node_modules contains the axios dependancy

// 5 - Run the program again :
// ==> check it work

// It actually work.

const axios = require("axios");

let url = "http://www.omdbapi.com/?apikey=fab8d88e&s=jedi";

axios.get(url).then((response) => {
  console.log(response.data);
});
