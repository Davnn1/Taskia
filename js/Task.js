class Task {
	constructor() {
		this.tasks = this.getTask();
	};

	getTask() {
		return JSON.parse(localStorage.getItem("tasks")) || [];
	};

	saveTask(taskData) {
		const newData = {
			id: Date.now(),
            isCompleted: false,
			...taskData,
		};

		this.tasks.push(newData);
        this.updateLocalStorage();

		return {
			success: true,
		};
	};

    completeTask(id){
        const index = this.tasks.findIndex((task) => task.id == id);

        if(index !== -1){
            this.tasks[index].isCompleted = true;
            this.updateLocalStorage();
        }
    };

    deleteTask(id){
        const index = this.tasks.findIndex((task) => task.id == id);

        if(index !== -1){
            this.tasks.splice(index, 1);
            this.updateLocalStorage();
        }
    };

    updateLocalStorage(){
		localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}
