const initialState = {
    // Hardcoded messages
    user: 'Bill',
    messages: [{
        user: 'Steve',
        message: 'Hello!'
    },
    {
        user: 'Bill',
        message: 'Hi Steve, how are you?'
    },
    {
        user: 'Steve',
        message: 'Dead.'
    }],
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

        default:
            return state;
    }
};

export default reducer