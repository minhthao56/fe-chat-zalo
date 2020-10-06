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
    }
  });

  return indexDB;
}
