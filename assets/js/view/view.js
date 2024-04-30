export default class View {
    constructor(elementId) {
        this.timerElement = document.getElementById(elementId);
    }

    render(formattedTime) {
        this.timerElement.textContent = formattedTime;
    }

    renderTasks(tasks) {
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';
    
        if (tasks.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Задачі відсутні';
            taskList.appendChild(li);
        } else {
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.className = 'accordion-item mb-2';
    
                const button = document.createElement('button');
                button.className = 'accordion-button font-bold bg-gray-200 hover:bg-gray-300 py-2 px-8 rounded w-full text-left flex justify-between items-center';
                button.innerHTML = `
                    <span class="task-name">${task.name}</span>
                    <span class="ml-4">+</span>
                `;
                li.appendChild(button);
    
                const content = document.createElement('div');
                content.className = 'accordion-content p-2 bg-gray-100 hidden';
    
                const date = new Date(task.startTime); 
                content.innerHTML = `
                    <p><span class="font-bold">Тривалість:</span> ${this.formatTime(task.duration)}</p>
                    <p><span class="font-bold">Дата:</span> ${date.toDateString()}</p>
                `;
                li.appendChild(content);
    
                taskList.appendChild(li);
            });
        }
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



