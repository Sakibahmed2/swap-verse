import axios from "axios";

const API_ENDPOINT =
  "https://api.jsonsilo.com/42bdd7bb-7066-49e8-ae50-bee747b7aa5c";
const API_KEY = "3akimClnEXEa0AgAeuQtNqsf1Q6Bb38oTzkvv2keBa";

export const fetchBookData = async () => {
  try {
    const headers = {
      "Content-Type": "application/json",
      "X-SILO-KEY": API_KEY,
    };

    const res = await axios.get(API_ENDPOINT, { headers });

    return res.data;
  } catch (err) {
    console.error("Error fetching book data:", err);
    throw new Error("Failed to fetch book data");
  }
};
