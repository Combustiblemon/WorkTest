import * as React from "react";
import { BookType } from "../../types";
import { Wrapper, Result, Position, Text } from "./List.styles";

export interface ListPropsType {
    books: BookType[],
    sortByTerm: string,
    sortBy: "ascending" | "descending"
}

const sortDictionary = {
  ascending: -1,
  descending: 1
};

const List = ({ books = [], sortByTerm, sortBy = "descending" }: ListPropsType): JSX.Element => {
  const sortedBooks = books.sort(
    (a: any, b: any) => sortDictionary[sortBy] * (b[sortByTerm] - a[sortByTerm])
  );

  return (
    <Wrapper>
      {sortedBooks.map((item, index) => (
        <Result key={item.objectID} href={item.url}>
          <Position>
            {index + 1}.
          </Position>
          <Text>
            {item.title}
          </Text>
        </Result>
      ))}
    </Wrapper>
  );
};

export default List;
