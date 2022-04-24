import IncomingTasks from "./incoming-tasks";

const popUpContainer = document.querySelector('.transparent-background');
const saveButton = document.querySelector('.editor__save-button');
const cancelButton = document.querySelector('.editor__cancel-button');
const titleInput: HTMLInputElement = document.querySelector('.editor__title');
const descInput: HTMLInputElement = document.querySelector('.editor__desc');
const tasksContainer = document.querySelector('.section__tasks');

export default class Editor {
    title: string;
    desc: string;
    isChange: boolean;
    changeElement: Element | null;
    incomingTasks: IncomingTasks;

    constructor() {
        this.incomingTasks = new IncomingTasks();
        this.isChange = false;
        this.changeElement = null;

        saveButton.addEventListener('click', this.save);
        cancelButton.addEventListener('click', this.cancel);
        tasksContainer.addEventListener('click', this.change)
    }

    save = () => {
        if(titleInput.value.trim() !== '' && descInput.value.trim() !== '') {
            this.title = titleInput.value;
            this.desc = descInput.value;
            if(!this.isChange)
                this.incomingTasks.add(this.title, this.desc);
            else {
                this.incomingTasks.change(this.changeElement, this.title, this.desc);
                this.isChange = false;
                this.changeElement = null;
            }
        }
        titleInput.value = '';
        descInput.value = '';
    }

    cancel = () => {
        titleInput.value = '';
        descInput.value = '';
    }

    change = (event) => {
        let parent = event.target.closest('.task-min');
        if(parent) {
            this.isChange = true;
            this.changeElement = parent;
            popUpContainer.classList.remove('none');
            titleInput.value = parent.querySelector('.task-min__name').innerHTML;
            descInput.value = parent.querySelector('.task-min__description').innerHTML;
        };
    }
}