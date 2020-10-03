// self.importScripts("https://unpkg.com/idb@5/build/iife/index-min.js");

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

// // saveSubscription saves the subscription to the backend
// const saveSubscription = async (subscription) => {
//   console.log("Save subscription");
//   console.log(subscription);
//   // console.log(localStorage.getItem("token"));

//   // const SERVER_URL = "http://localhost:3000/save-subscription";
//   // const response = await fetch(SERVER_URL, {
//   //   method: "post",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify(subscription),
//   // });
//   // return response.json();
// };

var token;

self.addEventListener("message", function (event) {
  token = event.data;
});

self.addEventListener("activate", async () => {
  // This will be called only once when the service worker is activated.
  var request = indexedDB.open("token-store", 1);
  console.log(" request.onsuccess");
  request.onsuccess = function (event) {
    var db = event.target.result;
    var result = db.transaction("token").objectStore("token").get("token");
    result.onsuccess = async (event) => {
      console.log(`Value is: ${event.target.result}`);

      try {
        const applicationServerKey = urlB64ToUint8Array(publicVapidKey);
        const options = { applicationServerKey, userVisibleOnly: true };
        const subscription = await self.registration.pushManager.subscribe(
          options
        );
        // console.log("subs: ", JSON.stringify(subscription));
        // const response = await saveSubscription(subscription);
        // console.log(response);

        console.log(subscription);
      } catch (err) {
        console.log("Error", err);
      }
    };
  };
});

self.addEventListener("push", function (event) {
  if (event.data) {
    console.log("Push event!! ", event.data.text());
  } else {
    console.log("Push event but no data");
  }
});

self.addEventListener("push", function (event) {
  if (event.data) {
    console.log("Push event!! ", event.data.text());
    showLocalNotification("Hurray !", event.data.text(), self.registration);
  } else {
    console.log("Push event but no data");
  }
});
const showLocalNotification = (title, body, swRegistration) => {
  const options = {
    body,
    // here you can add more properties like icon, image, vibrate, etc.
  };
  swRegistration.showNotification(title, options);
};
