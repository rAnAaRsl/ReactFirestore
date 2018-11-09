import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2Z7iNcods8NE1Qb4j853Z0lKX0ra2fZI",
    authDomain: "reactclientproject-537bd.firebaseapp.com",
    databaseURL: "https://reactclientproject-537bd.firebaseio.com",
    projectId: "reactclientproject-537bd",
    storageBucket: "reactclientproject-537bd.appspot.com",
    messagingSenderId: "406095731599"
}
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

const initialState = {};

const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;