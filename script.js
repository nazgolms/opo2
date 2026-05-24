document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("login-page").style.display = "none";
  document.getElementById("dashboard-page").style.display = "block";
});

function showPage(page) {
  document.getElementById("login-page").style.display = page === "login" ? "block" : "none";
  document.getElementById("signup-page").style.display = page === "signup" ? "block" : "none";
  document.getElementById("dashboard-page").style.display = page === "dashboard" ? "block" : "none";
}
