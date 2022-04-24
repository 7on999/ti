export default class EventBus {
    private constructor() {}

    private subscribers: ((event: Event) => void)[];

    public addSubscription(callback: (event: Event) => void): void {
        this.subscribers.push(callback);
    }

    public notifySubscribers(event: Event): void {
        this.subscribers.forEach(subscriber => subscriber(event));
    }

    private static instance: EventBus = new EventBus();

    static getInstance() {
        return EventBus.instance;
    }
}