document.addEventListener("DOMContentLoaded", () => {
	const taskForm = document.getElementById("taskForm");
	const taskManager = new Task();

	taskForm.addEventListener("submit", (e) => {
		e.preventDefault();

		const taskData = {
			userName: JSON.parse(localStorage.getItem("username")),
			taskName: document.getElementById("taskName").value,
			taskPriority: document.getElementById("taskPriority").value,
			createdAt: new Date()
				.toLocaleDateString("en-GB", {
					day: "2-digit",
					month: "long",
					year: "numeric",
				})
				.replace(/ /g, " "),
		};

		const result = taskManager.saveTask(taskData);

		if (result.success) {
			alert("Berhasil Tersimpan!");
			return (window.location.href = "../tasks.html");
		} else {
			console.log("Proses simpan gagal");
		}
	});
});
