const initialState = {

    user: '',
    messages: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return Object.assign({}, state, {
                messages: [
                    ...state.messages,
                    action.data
                ]
            })

        case 'GET_POSTS':
            return  {
                ...state,
                messages: action.data
            }
        case 'SET_USERNAME':
          return {
            ...state,
            user: action.data
          }
        default:
            return state;
    }
};

export default reducer
