import { openDB } from "idb";

export default function (token) {
  const indexDB = new Promise(function (resolve, reject) {
    if (token) {
      const dbPromise = openDB("token-store", 1, {
        upgrade(db) {
          db.createObjectStore("token");
        },
      });
      const idbKeyval = {
        async set(key, val) {
          return (await dbPromise).put("token", val, key);
        },
      };
      const r = idbKeyval.set("token", token);
      resolve(r);
    }
  });

  return indexDB;
}
