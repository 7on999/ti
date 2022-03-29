import { Editor } from './editor'
import { Subtasks } from './subtasks'

export class PopUp {
    popUpContainer = document.querySelector('.transparent-background')
    closeButton = document.querySelector('.pop-up__close-button')

    constructor() {
        this.closeButton.addEventListener('click', () => {
            this.popUpContainer.classList.add('none')
        })

        new Editor()
    }
}
