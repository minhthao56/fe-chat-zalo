import { deleteDB } from "idb";

export default async function LogOut() {
  localStorage.removeItem("token");
  await deleteDB("token-store");
  window.location.replace("/login");
  window.location.reload();
}
