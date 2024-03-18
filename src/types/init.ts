import { getFirelord, getFirestore } from "firelord";
import { initializeApp } from "firebase-admin";
import { ToDo } from "./dataTypes";
import { credential } from "firebase-admin";

const serviceAccount = require("./jullie-firebase-adminsdk.json");

const app = initializeApp({
  credential: credential.cert(serviceAccount),
  databaseURL: "https://jullie-6e477-default-rtdb.europe-west1.firebasedatabase.app",
});

export const db = getFirestore(app); // or getFirestore()

export const TodoModel = getFirelord<ToDo>(db, "TodosCollection"); // this is your firelordRef
