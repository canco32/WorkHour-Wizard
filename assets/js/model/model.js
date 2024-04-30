export default class Model {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        this.time = 0;
        this.interval = null;
        this.pausedTime = 0;
        this.controller = null; 
    }

    startTimer() {
        if (!this.interval) {
            const taskNumber = this.getNewTaskNumber();
            const taskName = `Задача №${taskNumber}`;
            let task = this.tasks.find(task => !task.endTime);
            if (!task) {
                task = {
                    name: taskName,
                    startTime: new Date(),
                    duration: 0,
                };
                this.tasks.push(task);
            }
            this.saveTasks();
            this.interval = setInterval(() => {
                this.time++;
                if (this.controller) {
                    this.controller.updateView();
                }
            }, 1000);
        }
    }
    
    pauseTimer() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    
    stopTimer() {
        if (this.interval) {
            clearInterval(this.interval);
            const duration = this.time; 
            const lastTask = this.tasks[this.tasks.length - 1];
            if (lastTask) {
                lastTask.duration += duration;
                lastTask.endTime = new Date();
            }
            this.saveTasks();
            this.time = 0;
            this.pausedTime = 0;
            this.interval = null; 
            if (this.controller) {
                this.controller.updateView();
            }
        }
    }
    
    newTimer() {
        if (this.interval) {
            this.stopTimer();
        }
        this.startTimer();
    }
    
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    getTasks() {
        return this.tasks;
    }

    getNewTaskNumber() {
        const tasks = this.tasks;
        const taskNumbers = tasks.map(task => {
            const match = task.name.match(/\d+/);
            return match ? parseInt(match[0]) : 0;
        });
        const maxTaskNumber = Math.max(...taskNumbers);
        return isFinite(maxTaskNumber) ? maxTaskNumber + 1 : 1;
    }
}
