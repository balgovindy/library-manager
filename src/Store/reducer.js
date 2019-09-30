import { USER_INFO, ADD_TO_LIB, REMOVE_FROM_LIB, HANDLE_FAV } from './../Components/Constant';
import { NORMAL, FAVOURITE } from './../Components/defaultData'
import { stat } from 'fs';
const initialState = {
    lib: [],
    fav: [],
    userInfo: {},
    index: 0
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case USER_INFO:
            const inputType = action.event.target.getAttribute('name');
            const inputValue = action.event.target.value;
            return Object.assign({}, state, {
                userInfo: {
                    ...state.userInfo,
                    [inputType]: inputValue,

                },
            })
        case ADD_TO_LIB:
            action.event.preventDefault();
            state.userInfo.index = ++state.index;
            state.userInfo.text = NORMAL;
            const userInfo = JSON.parse(JSON.stringify(state.userInfo))
            state.userInfo = {}
            return Object.assign({}, state, {
                lib: [
                    ...state.lib,
                    userInfo
                ]
            })

        case HANDLE_FAV:
            let cardObj;
            const inputText = action.text;
            const newtextState = inputText === NORMAL ? FAVOURITE : NORMAL;
            cardObj = state.lib.find(card => card.index === action.index)
            cardObj.text = newtextState;
            if (newtextState === FAVOURITE) {
                return Object.assign({}, state, {
                    lib: [
                        ...state.lib,
                    ],
                    fav: [
                        ...state.fav,
                        cardObj
                    ]
                });
            } else {
                return Object.assign({}, state, {
                    lib: [
                        ...state.lib
                    ],
                    fav: [
                        ...state.fav,
                        cardObj
                    ]
                },
                    {
                        fav: state.fav.filter(card => card.index !== action.index)
                    })
            }
        case REMOVE_FROM_LIB:
            return {
                ...state,
                lib: state.lib.filter(card => card.index !== action.index),
                fav: state.fav.filter(card => card.index !== action.index)
            }
        default:
            break
    }
    return newState
}
export default reducer;