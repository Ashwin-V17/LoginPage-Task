document.querySelector(".login-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  // https://login-page-backend-nine.vercel.app/
  try {
    const response = await fetch(
      "https://login-page-backend-jmcgofsve-ashwin-vs-projects.vercel.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      window.location.href = data.redirectUrl;
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});
