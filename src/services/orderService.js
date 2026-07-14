import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

// Add new order
export const placeOrder = async (order) => {
  const docRef = await addDoc(collection(db, "orders"), {
    ...order,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};

// Listen for live orders
export const listenToOrders = (callback) => {
  return onSnapshot(collection(db, "orders"), (snapshot) => {
    const orders = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    callback(orders);
  });
};

// Update order status
export const updateOrderStatus = async (id, status) => {
  const orderRef = doc(db, "orders", id);

  await updateDoc(orderRef, {
    status,
  });
};
import { query, where } from "firebase/firestore";

// Listen to a single order by token
export const listenToOrder = (token, callback) => {
  const q = query(
    collection(db, "orders"),
    where("token", "==", token)
  );

  return onSnapshot(q, (snapshot) => {
    if (!snapshot.empty) {
      callback({
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data(),
      });
    }
  });
};