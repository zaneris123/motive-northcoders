import { getAuth } from "firebase/auth";
import { firebaseApp } from "./connections";

const auth = getAuth(firebaseApp);