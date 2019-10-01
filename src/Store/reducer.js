import { USER_INFO, ADD_TO_LIB, REMOVE_FROM_LIB, HANDLE_FAV, LIB_SEARCH, FAV_SEARCH } from './../Components/Constant';
import { NORMAL, FAVOURITE } from './../Components/defaultData'
const initialState = {
    lib: [],
    fav: [],
    userInfo: {},
    index: 0,
    disabled: true,
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case USER_INFO:
            const inputType = action.event.target.getAttribute('name');
            const inputValue = action.event.target.value;
            if (inputType === 'employee' && inputValue.length) {
                state.disabled = false;
            } else if (inputType === 'employee' && !inputValue.length) {
                state.disabled = true;
            }
            return Object.assign({}, state, {
                userInfo: {
                    ...state.userInfo,
                    [inputType]: inputValue,
                    visible: true
                },
            })

        case ADD_TO_LIB:
            action.event.preventDefault();
            state.userInfo.index = ++state.index;
            state.userInfo.text = NORMAL;
            const userInfo = JSON.parse(JSON.stringify(state.userInfo))
            state.userInfo = {}
            state.disabled = true;
            return Object.assign({}, state, {
                lib: [
                    ...state.lib,
                    userInfo,
                ]
            })

        case HANDLE_FAV:
            let cardObj;
            const inputText = action.text;
            const newtextState = inputText === NORMAL ? FAVOURITE : NORMAL;
            cardObj = state.lib.find(card => card.index === action.index)
            cardObj.text = newtextState;
            cardObj.visible = true;
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

        case LIB_SEARCH:
            const libsearchtext = action.event.target.value.toUpperCase();
            let libserachArr = state.lib.map(x => {
                if (x.employee.toUpperCase().indexOf(libsearchtext) !== -1) {
                    x.visible = true;
                } else {
                    x.visible = false;
                }
                return x;
            })
            return Object.assign({}, state, {
                lib: libserachArr
            })

        case FAV_SEARCH:
            const favsearchtext = action.event.target.value.toUpperCase();
            let favserachArr = state.fav.map(x => {
                if (x.employee.toUpperCase().indexOf(favsearchtext) !== -1) {
                    x.visible = true;
                } else {
                    x.visible = false;
                }
                return x;
            })
            return Object.assign({}, state, {
                fav: favserachArr
            })

        default:
            break
    }
    return newState
}
export default reducer;