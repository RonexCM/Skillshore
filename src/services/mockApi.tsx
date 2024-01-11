const USER_URL = "https://657ad086394ca9e4af12b9e0.mockapi.io/student";
import { TUserDetails } from "../pages/list/types/types";

export const fetchData = async (): Promise<TUserDetails[] | void> => {
  try {
    const res = await fetch(USER_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
