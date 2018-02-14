import axios from 'axios';

const url = 'https://tkvamme.tk/twibblerapi/api/messages' //server api url

export const addPost = (dispatch, post) => {
    axios.post(url, {
        sender: post.sender,
        message: post.message
    }).then(function (res) {
        console.log(res);
        if (res.statusText === 'OK') {
            dispatch({
              type: 'ADD_POST',
              data: res.data
            });
        } else {
            console.log('Error')
        }
    })
}

// TODO: fix: needs to be imported and called somewhere.
export const getInitialList = (dispatch) => {
    axios
        .get(url)
        .then(function (res) {
          console.log(res);
          if (res.statusText === 'OK') {
            dispatch({
              type: 'INITIAL_LIST_RECEIVED',
              data: res.data
            });
          } else {
            console.log('Error')
        }
    })
}
