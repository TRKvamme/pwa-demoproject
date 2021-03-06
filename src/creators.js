import axios from 'axios';
import swal from 'sweetalert2';
import idbKeyval from 'idb-keyval'

const url = 'https://tkvamme.tk/twibblerapi/api/messages' //server api url

export const addPost = (dispatch, post) => {
    axios.post(url, {
        sender: post.sender,
        message: post.message
    }).then(function (res) {
        if (res.statusText === 'OK') {
            // Send to redux
            dispatch({
                type: 'ADD_POST',
                data: res.data
            });
            // Add to idb
            idbKeyval.get('messages').then(function (m) {
                idbKeyval.set('messages', [...m, res.data])
            })
        } else {
            console.log('Error')
        }
    })

    if (post.message.toLowerCase() === 'sw?') {
        let sw = navigator.serviceWorker

        let post = {
            sender: 'Service Worker',
            message: "Yes! I'm alive :D"
        }

        if (typeof sw === 'undefined') {
            post = {
                sender: 'Service Worker',
                message: "No, I'm not supported on this platform :("
            }
        }

        addPost(dispatch, post)
    }
}

export const getPosts = (dispatch) => {
    axios.get(url).then(function (res) {
        if (res.statusText === 'OK') {
            // Send to redux
            dispatch({ type: 'GET_POSTS', data: res.data })
            // Add to idb
            idbKeyval.set('messages', res.data)
        } else {
            console.log('Error')
        }
    })
}

export const setUsername = (dispatch) => {
    if (window.localStorage) {
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
                confirmButtonColor: '#4C7553'
            }).then((result) => {
                window.localStorage.setItem("user", result.value)
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
