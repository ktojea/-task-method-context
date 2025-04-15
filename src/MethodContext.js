import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,
    handler: null,

    subscribe() {
        this.handler = () => {
            this.count += 1;
        };
        EventEmitter.on('click', this.handler);
    },

    unsubscribe() {
        if (this.handler) {
            EventEmitter.off('click', this.handler);
        }
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {},
};
