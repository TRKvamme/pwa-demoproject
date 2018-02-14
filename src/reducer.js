const initialState = {

    user: '',
    messages: []

    // Hardcoded messages
    // user: 'Bill',
    // messages: [{
    //     sender: 'Steve',
    //     message: 'Hello!'
    // },
    // {
    //     sender: 'Bill',
    //     message: 'Hi Steve, how are you?'
    // },
    // {
    //     sender: 'Steve',
    //     message: 'Dead.'
    // }],
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
            return Object.assign({}, state, {
                messages: action.data
            })

        default:
            return state;
    }
};

export default reducer
