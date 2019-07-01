import { Action1 } from './component1.actions';

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
        default:
            return state
    }
};
