import axios from 'axios';
import swal from 'sweetalert2';

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

export const getPosts = (dispatch) => {
    axios.get(url).then(function (res) {
        console.log(res)
        if (res.statusText === 'OK') {
            dispatch({ type: 'GET_POSTS', data: res.data })
        } else {
            console.log('Error')
        }
    })
}

export const setUsername = (dispatch) => {
  if (localStorage){
    let user = window.localStorage.getItem("user");
    if (user) {
      dispatch({
        type: "SET_USERNAME",
        data: user
      })
    } else {
      swal({
        title: 'Username:',
        input: 'text',
        confirmButtonText: 'Submit',
      }).then((result) => {
          dispatch({
            type: "SET_USERNAME",
            data: result.value
          })
        }
      )
    }
  } else {
    swal({
      title: 'Username:',
      input: 'text',
      confirmButtonText: 'Submit',
    }).then((result) => {
        dispatch({
          type: "SET_USERNAME",
          data: result.value
        })
      }
    )
  }

}
