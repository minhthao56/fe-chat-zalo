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

self.addEventListener("activate", async () => {
  console.log("activate");
  var request = indexedDB.open("token-store", 1);

  request.onsuccess = function (event) {
    var db = event.target.result;
    var result = db.transaction("token").objectStore("token").get("token");
    result.onsuccess = async (event) => {
      const token = event.target.result;
      console.log(token);

      const applicationServerKey = urlB64ToUint8Array(publicVapidKey);
      const options = { applicationServerKey, userVisibleOnly: true };
      const subscription = await self.registration.pushManager.subscribe(
        options
      );
      console.log(subscription);
      const SERVER_URL = "http://localhost:3000/notification/subscription";
      const response = await fetch(SERVER_URL, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(subscription),
      });

      console.log(response);
    };
  };
});

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data);
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "https://zalo-chat-static.zadn.vn/v1/favicon-96x96.png",
  });
});
