document.addEventListener("DOMContentLoaded", () => {
	const userForm = document.getElementById("userForm");
	const userManager = new User();

	userForm.addEventListener("submit", (e) => {
		e.preventDefault();

		username = document.getElementById("username").value;

		const result = userManager.signInUser(username);

		if (result.success) {
			alert("Login Berhasil!");
			localStorage.setItem("username", JSON.stringify(result.username));
			return (window.location.href = "../tasks.html");
		} else {
			alert("Login Gagal!");
		}
	});
});
