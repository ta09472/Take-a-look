// fetch("http://localhost:3000/").then((res) => {
//   console.log(res.json());
// });

import App from "./components/App.js";
import routerInit from "./router.js";

new App({ $target: document.querySelector(".App") });

routerInit();
