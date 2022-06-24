import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectTeam } from "../../store/slices/teamSlice";
import { searchThunk, selectSearched } from "../../store/slices/searchSlice";
import ProblemInfo from "./ProblemInfo";

export default function ProblemList() {
  const searched = useSelector(selectSearched);
  const team = useSelector(selectTeam);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mounted");
    dispatch(searchThunk({ team, page: 1 }));
  }, []);

  const Component = searched ? (
    searched.items.map((it) => <ProblemInfo problem={it} key={it.problemId} />)
  ) : (
    <h1>못 찾겠어요.</h1>
  );

  return <div>{Component}</div>;
}
