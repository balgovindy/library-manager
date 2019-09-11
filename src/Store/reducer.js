import { USER_INFO, ADD_TO_LIB, REMOVE_FROM_LIB, ADD_TO_FAV, REMOVE_FROM_FAV } from './../Components/Constant';
import { NORMAL, FAVOURITE } from './../Components/defaultData'
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
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    [inputType]: inputValue
                }
            }
        case ADD_TO_LIB:
            action.event.preventDefault();
            state.userInfo.index = ++state.index;
            state.userInfo.text = NORMAL;
            const userInfo = JSON.parse(JSON.stringify(state.userInfo))
            state.userInfo = {}
            return {
                ...state,
                lib: state.lib.concat(userInfo)
            }
        case ADD_TO_FAV:
            const inputText = action.text;
            const newtextState = inputText === NORMAL ? FAVOURITE : NORMAL;
            state.lib[action.index - 1].text = newtextState;
            return {
                ...state,
            }
        case REMOVE_FROM_LIB:
            console.log(REMOVE_FROM_LIB)
            return {
                ...state
            }
        case REMOVE_FROM_FAV:
            console.log(REMOVE_FROM_FAV)
            return {
                ...state
            }
        default:
            break
    }
    return newState
}

export default reducer;