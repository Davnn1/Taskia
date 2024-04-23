class User {
	constructor() {
		this.users = this.getUsers();
	}
	saveUser(userData) {
		const newUser = {
			id: Date.now(),
			...userData,
		};

		if (this.users.some((user) => user.username === newUser.username)) {
			return { success: false };
		}

		this.users.push(newUser);
		localStorage.setItem("users", JSON.stringify(this.users));

		return {
			success: true,
		};
	}

	signInUser(username) {
		if (
			this.users.some(
				(user) => user.username.toLowerCase() === username.toLowerCase()
			)
		) {
			return { success: true, username };
		}
		return { success: false, message: "Data Tidak Ditemukan" };
	}

	getUsers() {
		return JSON.parse(localStorage.getItem("users")) || [];
	}
}
