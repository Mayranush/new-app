import { Action1, Action2, Action3 } from './component1.actions';

const initialState = {
    text: 'some text',
};

export const component1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action1:
            return {
                ...state,
                text: action.payload,
            };
        case Action2:
            return {
                ...state,
                text: action.payload,
            };
        case Action3:
            return {
                ...state,
                text: 'after action 3',
            };
        default:
            return state
    }
};
