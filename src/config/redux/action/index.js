import firebase from '../../../config/firebase';

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({ type: 'CHANGE_USER', value: 'Angga Novandrian' })
    }, 2000)
}

export const RegisterUserAPI = (data) => (dispatch) => {
    dispatch({ type: 'CHANGE_ISLOADING', value: true });
    return (
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
            console.log('success: ', res);
            dispatch({ type: 'CHANGE_ISLOADING', value: false });
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            dispatch({ type: 'CHANGE_ISLOADING', value: false });
        })
    )
}