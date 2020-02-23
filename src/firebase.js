import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseconfig";

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();

const todosRef = databaseRef.child("todos");
export { firebase, todosRef };
