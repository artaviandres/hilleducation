import firebase from 'firebase';

export const addUser = (user) => {
    return {
        type: 'add',
        user
    }
}

export const logout = () => {
    const auth = firebase.auth();
    auth.signOut();
    return {
        type: 'logout',
        payload: []
    }
}