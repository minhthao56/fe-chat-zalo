export default function LogOut() {
  localStorage.removeItem("token");
  window.location.replace("/login");
  window.location.reload();
}
