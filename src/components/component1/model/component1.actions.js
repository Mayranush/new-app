/*
 * action types
 */

export const Action1 = 'ACTION_1';

/*
 * action creators
 */

export function action1(text) {
    return { type: Action1, payload: text }
}
