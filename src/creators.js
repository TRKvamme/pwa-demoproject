// axios example from wa
// export const makeEmployee = async (dispatch, companyId, applicationId) => {
//     await axios.post('/api/admin/comany/applications/employee/' + companyId + '/' + applicationId)
//     const data7 = await axios.get('/api/admin/comany/applications')
//     dispatch({ type: 'SET_COMPANYAPPLICATIONS', data: data7.data })
// }

export const addPost = async (dispatch, post) => {
    // TODO Implement axios to send requests to server (see example over)
    dispatch({ type: 'ADD_POST', data: post })
}