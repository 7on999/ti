import Editor from './editor';
import Subtasks from './subtasks';

const popUpContainer = document.querySelector('.transparent-background');
const closeButton = document.querySelector('.pop-up__close-button');

const saveEditorButton = document.querySelector('.editor__save-button');
const cancelEditorButton = document.querySelector('.editor__cancel-button');
const titleInput: HTMLInputElement = document.querySelector('.editor__title');
const descInput: HTMLInputElement = document.querySelector('.editor__desc');

export default class PopUp {
    editor: Editor;
    subtasks: Subtasks

    constructor() {
        closeButton.addEventListener('click', this.close);
        saveEditorButton.addEventListener('click', this.close);
        cancelEditorButton.addEventListener('click', this.close);

        this.editor = new Editor();
        this.subtasks = new Subtasks();
    }

    open() {
        popUpContainer.classList.remove('none');
    }

    close() {
        popUpContainer.classList.add('none');
        /*titleInput.value = '';
        descInput.value = '';*/
    }
}
