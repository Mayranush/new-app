/*
 * action types
 */

export const Action1 = 'ACTION_1';
export const Action2 = 'ACTION_2';
export const Action3 = 'ACTION_3';

/*
 * action creators
 */

export function action1(text) {
    return { type: Action1, payload: text }
}

export function action2(text) {
    return { type: Action2, payload: text }
}

export function action3() {
    return { type: Action3 }
}
