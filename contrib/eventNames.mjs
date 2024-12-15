import * as events from './events.mjs';

export const eventNames = [];

for (let key in events) {
    eventNames[events[key]] = key;
}