/* ===================== WDC Portal — login gate ====================== */

const SESSION = "wdc_admin_ok";

// If already signed in, go straight to the dashboard
if (sessionStorage.getItem(SESSION) === "1") {
  location.replace("dashboard.html");
}

document.getElementById("gateForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = e.target.querySelector("button[type=submit]");
  btn.disabled = true;
  btn.textContent = "Signing in…";

  try {
    const data = await WDCStore.load();
    const enteredUser = document.getElementById("un").value.trim();
    const enteredPass = document.getElementById("pw").value;
    const validUser   = data.site.adminUsername || "wdc";
    const validPass   = data.site.adminPassword  || "kl@wdc";

    if (enteredUser === validUser && enteredPass === validPass) {
      sessionStorage.setItem(SESSION, "1");
      location.href = "dashboard.html";
    } else {
      document.getElementById("gateErr").textContent = "Username or password doesn't match. Try again.";
      if (enteredUser !== validUser) {
        document.getElementById("un").select();
      } else {
        document.getElementById("pw").select();
      }
      btn.disabled = false;
      btn.textContent = "Sign in";
    }
  } catch (err) {
    document.getElementById("gateErr").textContent = "Could not connect. Check your internet and try again.";
    btn.disabled = false;
    btn.textContent = "Sign in";
  }
});
