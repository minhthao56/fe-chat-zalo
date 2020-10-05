// import { openDB } from "idb";

export default function (token) {
  const indexDB = new Promise(function (resolve, reject) {
    if (token) {
      indexedDB.deleteDatabase("token-store");
      var request = window.indexedDB.open("token-store", 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore("token");
        var transaction = event.target.transaction;

        transaction.oncomplete = function (event) {
          var transaction = db.transaction(["token"], "readwrite");
          var store = transaction.objectStore("token");
          var request = store.add(token, "token");
          resolve(request);
        };
      };

      // openDB("token-store", 1, {
      //   upgrade(db) {
      //     db.createObjectStore("token");
      //   },
      // }).then((dbPromise) => {
      //   console.log(dbPromise);
      //   const idbKeyval = {
      //     async set(key, val) {
      //       return await dbPromise.put("token", val, key);
      //     },
      //   };
      //   const r = idbKeyval.set("token", token);
      //   resolve(r);
      // });
    }
  });

  return indexDB;
}
