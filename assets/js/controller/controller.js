export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.model.controller = this;
    }

    updateView() {
        const time = this.model.time;
        const formattedTime = this.formatTime(time);
        this.view.render(formattedTime);
    }

    startTimer() {
        this.model.startTimer();
    }

    pauseTimer() {
        this.model.pauseTimer();
    }

    stopTimer() {
        this.model.stopTimer();
        this.view.renderTasks(this.model.getTasks());
    }

    newTimer() {
        this.model.newTimer();
        this.view.renderTasks(this.model.getTasks());
    }

    formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
    
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');
    
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
}
