import { getDoc, doc } from 'firebase/firestore'
import {db} from './connections'

export const getSingleLocation = async (locationId)=>{
    const locationDoc = (await getDoc(doc(db, 'locations', locationId)))
    if(!locationDoc.exists){
        return null
    } else {
        return locationDoc.data();
    }
}