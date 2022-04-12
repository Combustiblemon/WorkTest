import React, { useState } from "react";
import findBooks from "./findBooks";
import List from "./components/list/List";
import DropDown, { OptionType } from "./components/dropdown/Dropdown";
import SearchBar from "./components/searchBar/SearchBar";
import Button from "./components/button/Button";
import { BookType } from "./types";
import { AppStyled, Header, PreviousSearch, Results, Search, Wrapper } from "./styles";

//make search its own component (button component)
//make input its own component

const dropdownOptions: OptionType[] = [
  {
    value: "relevancy_score",
    label: "Most relevant"
  },
  {
    value: "points",
    label: "Most points"
  }
];

export default function App(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<BookType[]>([]);
  const [dropdownValue, setDropdownValue] = useState<string>("relevancy_score");
  const [previousSearch, setPreviousSearch] = useState<string>("");

  const handleClick = async () => {
    if (searchTerm === "") return;
    try {
      const results = await findBooks(searchTerm);
      setPreviousSearch(searchTerm);
      setSearchResults(results);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AppStyled>
      <Wrapper>
        <Header>Library Search</Header>
        <PreviousSearch>{previousSearch ? `Previous Search: ${previousSearch}` : ""}</PreviousSearch>
        <Search>
          <SearchBar
            type="text"
            placeholder="search book"
            onChange={(value: string) => setSearchTerm(value)}
            onKeyDown={(value) => value?.key === "Enter" ? handleClick() : ""}
            />
          <Button callback={handleClick} text="Search" theme="primary" size="small" border={true}/>
        </Search>
        <DropDown
          options={dropdownOptions}
          callback={(value: string) => setDropdownValue(value)}
        />
        {searchResults.length ? (<>
          <Results>Results: {searchResults.length}</Results>
          <List
            books={searchResults}
            sortBy="descending"
            sortByTerm={dropdownValue}
            />
        </>) : ''}
      </Wrapper>
    </AppStyled>
  );
}
