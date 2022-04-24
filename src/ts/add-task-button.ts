import PopUp from "./pop-up";

const titleInput: HTMLInputElement = document.querySelector('.editor__title');
const descInput: HTMLInputElement = document.querySelector('.editor__desc');

export class AddTaskButton {
    popUp: PopUp;

    constructor() {
        this.popUp = new PopUp();

        document.querySelector('.add-task').addEventListener('click', () => {
            this.popUp.open();
            titleInput.value = '';
            descInput.value = '';
        });
    }
}