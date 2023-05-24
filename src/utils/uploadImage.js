import { storage } from "./connection";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export const uploadImage = async (images, locationId) => {
  const currentDate = new Date();
  const timestamp = currentDate.getTime();

  const urls = await Promise.all(
    images.map(async (imageName) => {
      const imageRef = ref(
        storage,
        `${locationId}/${imageName.substring(100, 115)}${timestamp}`
      );

      const snapshot = await uploadString(imageRef, imageName, "data_url");
      const url = await getDownloadURL(snapshot.ref);

      return url;
    })
  );

  return urls;
};
