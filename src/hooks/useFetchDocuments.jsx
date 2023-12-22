"use client";

import React, { useCallback, useState, useEffect } from "react";
import { db } from "src/firebase/firebase";
import { query, collection, where, getDoc } from "firebase/firestore";

const useFetchDocuments = (collectionName, arg) => {
  const [documents, setDocumentss] = useState([]);

  const getDocuments = useCallback(async () => {
    const q = query(
      collection(db, collectionName),
      where(arg[0], arg[1], arg[2])
    );
    const querySnapshot = await getDoc(q);
    let documentsArray = [];

    querySnapshot.forEach((doc) => {
      documentsArray.push(doc.data());
    });

    setDocuments(documentsArray);
  }, [collectionName, arg[0], arg[1], arg[2]]);

  useEffect(() => {
    getDocuments();
  }, [getDocuments]);

  return { documents };
};

export default useFetchDocuments;
