import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();



// const publicVapidKey =
//   "BOo3F7CV18dk-hxAIk0Q59qRkVu0o_4MQNoLP7pLgDPXaUloBfOqnSqXBsEFCmW2H059TJABMbviIR7vkh6hORw";

// const urlB64ToUint8Array = (base64String) => {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding)
//     .replace(/\-/g, "+")
//     .replace(/_/g, "/");
//   const rawData = atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };

// window.subscribe = async () => {
//   if (!('serviceWorker' in navigator)) return;

//   const registration = await navigator.serviceWorker.ready;

//   // Subscribe to push notifications
//   const subscription = await registration.pushManager.subscribe({
//     userVisibleOnly: true,
//     applicationServerKey: urlB64ToUint8Array(publicVapidKey),
//   });
//   console.log(subscription);

//   // await fetch('/subscription', {
//   //   method: 'POST',
//   //   body: JSON.stringify(subscription),
//   //   headers: {
//   //     'content-type': 'application/json',
//   //   },
//   // });
// };

// if ("serviceWorker" in navigator) {
//   const token = localStorage.getItem("token");
//   console.log(token);
//   navigator.serviceWorker
//     .register("sw-push.js")
//     .then(function () {
//       return navigator.serviceWorker.ready;
//     })
//     .then(function (reg) {
//       console.log("Service Worker is ready", reg);
//       reg.pushManager
//         .subscribe({
//           userVisibleOnly: true,
//           applicationServerKey: urlB64ToUint8Array(publicVapidKey),
//         })
//         .then(function (sub) {
//           reg.active.postMessage(JSON.stringify({ uid: "dwd", token: "dwdw" }));
//           console.log("Posted message");
//           console.log(sub);
//         });
//     })
//     .catch(function (error) {
//       console.log("Error : ", error);
//     });
// }
