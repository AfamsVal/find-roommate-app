import { query } from "firebase/database";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { ISearch, ISearchStorage } from "./types";

export const checkSearchDetails = async (debounceValue: string) => {
  let details: ISearchStorage;
  const collectionSearchRef: any = collection(db, "search-rooms");
  const q: any = query(collectionSearchRef);

  if (localStorage.getItem("search-room-query")) {
    const fetched: any = JSON.parse(
      localStorage.getItem("search-room-query") + ""
    );
    details = { data: fetched.data, lastTime: fetched.lastTime };
    const newDate: any = new Date();
    const oldDate: any = new Date(details.lastTime);

    if (
      !localStorage.getItem("search-room-query") ||
      newDate - oldDate > 10 * 60 * 1000
    ) {
      // More than 10 mins
      console.log(122);
      onSnapshot(q, (snapshot: any) => {
        const res = snapshot.docs.map((doc: any) => doc.data().titles);
        const info = { data: res[0], lastTime: new Date() };
        localStorage.setItem("search-room-query", JSON.stringify(info));

        const data = res[0].filter(
          (d: ISearch) =>
            d.name.toLowerCase().indexOf(debounceValue.toLowerCase()) !== -1
        );
        return data;
      });
    } else {
      // Less than 10 mins
      console.log(123, details.data);
      const data = details.data.filter(
        (d: ISearch) =>
          d.name.toLowerCase().indexOf(debounceValue.toLowerCase()) !== -1
      );
      return data;
    }
  } else {
    console.log(124);
    onSnapshot(q, (snapshot: any) => {
      const res = snapshot.docs.map((doc: any) => doc.data().titles);
      const info = { data: res[0], lastTime: new Date() };
      localStorage.setItem("search-room-query", JSON.stringify(info));

      const data = res[0].filter(
        (d: ISearch) =>
          d.name.toLowerCase().indexOf(debounceValue.toLowerCase()) !== -1
      );
      return data;
    });
  }
};
