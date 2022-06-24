import SearchFilter from "../components/search/SearchFilter";
import ProblemList from "../components/search/ProblemList";

export default function Search() {
  return (
    <div>
      <h1>Search</h1>
      <SearchFilter />
      <br />
      <ProblemList />
    </div>
  );
}
