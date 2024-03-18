import { TodoModel } from "./init";
import { getDoc, setDoc, updateDoc, deleteDoc, addDoc, serverTimestamp, increment, arrayUnion, createDoc } from "firelord";
//
async () => {
  await createDoc(TodoModel.doc("ababagalamaga"), {
    title: "Todo-test-1",
    description: "Lorem ipsum dolor sit amet consectetuer",
    timestamp: serverTimestamp(),
    priority: "high",
  });
};
