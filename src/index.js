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

/* Notification service worker check */

const check = () => {
  if (!("serviceWorker" in navigator)) {
    throw new Error("No Service Worker support!");
  }
  if (!("PushManager" in window)) {
    throw new Error("No Push API Support!");
  }
};

const publicVapidKey =
  "BOo3F7CV18dk-hxAIk0Q59qRkVu0o_4MQNoLP7pLgDPXaUloBfOqnSqXBsEFCmW2H059TJABMbviIR7vkh6hORw";

const urlB64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const registerServiceWorker = async () => {
  const swUrl = `${process.env.PUBLIC_URL}/sw-push.js`;
  console.log("swUrl", swUrl);
  const swRegistration = await navigator.serviceWorker.register(swUrl, {
    scope: "/worker/",
  });

  return swRegistration;
};

const requestNotificationPermission = async () => {
  Notification.requestPermission((status) => {
    console.log("Notification permission status:", status);
  });
};

const main = async () => {
  check();
  const swRegistration = await registerServiceWorker();
  console.log("swReg", swRegistration);
  const permission = await requestNotificationPermission();
  // self.addEventListener("activate", async () => {
  //   const sub = await swRegistration.pushManager.subscribe({
  //     userVisibleOnly: true,
  //     applicationServerKey: urlB64ToUint8Array(publicVapidKey),
  //   });
  //   console.log(sub);
  // });

  // swRegistration.active.postMessage("12345678");
  var myWorker = new Worker("sw-push.js");

  myWorker.postMessage(localStorage.getItem("token"));

  serviceWorker.unregister();
};
main();
