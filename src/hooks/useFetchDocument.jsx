import React, { useCallback, useState } from "react";
import { db } from "src/firebase/firebase";
import { doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useEffect } from "react";

const useFetchDocument = () => {
  const [document, setDocument] = useState(null);

  const getDocument = useCallback(async () => {
    const docRef = doc(db, collectionName, documentID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const obj = {
        id: documentID,
        ...docSnap.data(),
      };

      setDocument(obj);
    } else {
      toast.error("Document not found");
    }
  }, [collectionName, documentID]);

  useEffect(() => {
    getDocument();
  }, [getDocument]);

  return { document };
};

export default useFetchDocument;
