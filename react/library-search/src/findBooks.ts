import axios from "axios";
import { BookType } from "./types";

const findBooks = async (name: String): Promise<BookType[]> => {
  const result = await axios(
    `https://hn.algolia.com/api/v1/search?query=${name}`
  );
  return result.data.hits.filter((i: any) => i.relevancy_score ? i.relevancy_score > 8000 : false);
};

export default findBooks;
