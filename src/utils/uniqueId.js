import { doc, getDoc } from "firebase/firestore";
import { db } from "./connection";

const uniqueId = async () => {
  const randomIdNum = Math.floor(Math.random() * 1000000);
  const randomIdStr = randomIdNum.toString();
  const reportsDocRef = doc(db, "reports", randomIdStr);
  const reportRef = await getDoc(reportsDocRef);
  if (reportRef.exists()) {
    return uniqueId();
  } else {
    return randomIdStr;
  }
};

export default uniqueId;
