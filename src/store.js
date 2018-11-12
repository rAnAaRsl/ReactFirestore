import {createStore, combineReducers, compose} from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';
import {notifyReducer} from './reducer/notifyReducer';
import {settingReducer} from './reducer/settingReducer';

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
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    notify: notifyReducer,
    settings: settingReducer
});

if (localStorage.getItem('settings') == null) {

    // Default settings
    const defaultSettings = {
        disableBalanceOnAdd: true,
        disableBalanceOnEdit: false,
        allowRegistration: false
    };

    console.log(defaultSettings);

    // Set to localStorage
    localStorage.setItem('settings', JSON.stringify(defaultSettings));
}

const settingObj = JSON.parse(localStorage.getItem("settings"));
console.log(settingObj)
// Create initial state
const initialState = {settings:settingObj};

const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;