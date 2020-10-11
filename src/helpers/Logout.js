export default async function LogOut() {
  localStorage.removeItem("token");
  window.location.replace("/login");
}
