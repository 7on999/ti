export default class IncomingTasks {
    constructor() {}

    add(title: string, desc: string) {
        let task = `
            <div class="task-min">
                <div class="task-min__content">
                    <div class="task-min__check-box">
                        <div class="check-box">
                            <svg width="24" height="24" class="check-box__mark">
                                <path
                                    d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z"
                                ></path>
                            </svg>
                        </div>
                    </div>

                    <div class="task-min__main-content">
                        <p class="task-min__name">${title}</p>

                        <p class="task-min__description">${desc}</p>

                        <div class="task-min__tags">
                            <p class="date">
                                <svg width="12" height="12" viewBox="0 0 12 12">
                                    <path
                                        fill="currentColor"
                                        fill-rule="nonzero"
                                        d="M9.5 1A1.5 1.5 0 0 1 11 2.5v7A1.5 1.5 0 0 1 9.5 11h-7A1.5 1.5 0 0 1 1 9.5v-7A1.5 1.5 0 0 1 2.5 1h7zm0 1h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM8 7.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM8.5 4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"
                                    ></path>
                                </svg>
                                date
                            </p>

                            <div class="task-min__labels">
                                <p class="label">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                    >
                                        <path
                                            d="M9.357 1C10.264 1 11 1.736 11 2.643V6.07c0 .436-.173.854-.481 1.162L7.232 10.52a1.643 1.643 0 01-2.323 0L1.48 7.09c-.64-.64-.64-1.68.001-2.322L4.768 1.48C5.076 1.173 5.494 1 5.93 1h3.427zm-.07.91H5.93a.805.805 0 00-.569.235L2.145 5.362a.805.805 0 000 1.138L5.5 9.855a.805.805 0 001.138 0l3.217-3.217a.805.805 0 00.236-.569V2.713a.804.804 0 00-.804-.804zM7.364 3.726a.91.91 0 110 1.818.91.91 0 010-1.818z"
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    label1
                                </p>

                                <p class="label">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        viewBox="0 0 12 12"
                                    >
                                        <path
                                            d="M9.357 1C10.264 1 11 1.736 11 2.643V6.07c0 .436-.173.854-.481 1.162L7.232 10.52a1.643 1.643 0 01-2.323 0L1.48 7.09c-.64-.64-.64-1.68.001-2.322L4.768 1.48C5.076 1.173 5.494 1 5.93 1h3.427zm-.07.91H5.93a.805.805 0 00-.569.235L2.145 5.362a.805.805 0 000 1.138L5.5 9.855a.805.805 0 001.138 0l3.217-3.217a.805.805 0 00.236-.569V2.713a.804.804 0 00-.804-.804zM7.364 3.726a.91.91 0 110 1.818.91.91 0 010-1.818z"
                                            fill="currentColor"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    label1
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="hr-line" />
            </div>
        `
        document.querySelector('.section__tasks').innerHTML += task;
    }

    change(changeElement: Element, title: string, desc: string) {
        changeElement.querySelector('.task-min__name').innerHTML = title;
        changeElement.querySelector('.task-min__description').innerHTML = desc;
    }
}