export const registerPush = () => {
  const check = () => {
    if (!("serviceWorker" in navigator)) {
      throw new Error("No Service Worker support!");
    }
    if (!("PushManager" in window)) {
      throw new Error("No Push API Support!");
    }
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
  };

  main();
};
