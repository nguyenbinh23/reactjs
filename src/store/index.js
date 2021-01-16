
import { createStore }  from "redux";


const reducer = (state , action) => {
    switch(action.type) {
        case 'CHANGE_USER': {
            return {
                ...state,
                user: {
                    name: action.payload.name,
                    token: action.payload.token,
                }
            }
        }
        default: {
            return state
        }
    } 
};


const initialState = {
    user: {
        name: 'Nguyễn Bình',
        token: 'Bear aaaaaaaaaaa.yyyyyyyyyyy.cccccccc'
    },
    appStatus: {
        isMobile: false
    }
}
const store = createStore(reducer, initialState);

export default store;