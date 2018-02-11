const initialState = {
    // Hardcoded messages
    messages: [{
        sender: 'Steve',
        message: 'Hello!'
    },
    {
        sender: 'Bill',
        message: 'Hi Steve, how are you?'
    },
    {
        sender: 'Steve',
        message: 'Dead.'
    }],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'POST_MESSAGE':
            return Object.assign({}, state, { messages: action.data })

        default:
            return state;
    }
};

export default reducer