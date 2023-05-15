import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export const useCollection = ({ myCollection, myQuery, myOrder }) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = collection(db, myCollection);

    if (myQuery && myOrder) {
      ref = query(ref, where(...myQuery), orderBy(...myOrder));
    }

    onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((document) => {
          results.push({ ...document.data(), id: document.id });
        });
        setDocuments(results);
        setError(null);
      },
      (err) => {
        setError(err.message);
      }
    );
  }, [myCollection]);

  return { documents, error };
};
