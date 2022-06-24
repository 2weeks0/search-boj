import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { selectTeam } from "../../store/slices/teamSlice";
import { searchThunk, selectSearched, selectPage, plusPage } from "../../store/slices/searchSlice";
import ProblemInfo from "./ProblemInfo";

export default function ProblemList() {
  const [loading, setLoading] = useState(false);
  const page = useSelector(selectPage);

  const searched = useSelector(selectSearched);
  const team = useSelector(selectTeam);
  const [ref, inView] = useInView();

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("page", page);
    setLoading(true);
    dispatch(searchThunk({ team, page }));
    setLoading(false);
  }, [dispatch, team, page]);

  useEffect(() => {
    if (inView && !loading) {
      dispatch(plusPage());
    }
  }, [dispatch, inView, loading]);

  if (!searched) {
    return <h1>못 찾겠어요.</h1>;
  }

  const Tbody = searched.items.map((it, idx) =>
    idx === searched.items.length - 1 ? (
      <tr ref={ref} key={it.problemId}>
        <ProblemInfo problem={it} />
      </tr>
    ) : (
      <tr key={it.problemId}>
        <ProblemInfo problem={it} />
      </tr>
    )
  );
  return (
    <table>
      <thead>
        <tr>
          <td>번호</td>
          <td>티어</td>
          <td>이름</td>
          <td>정답자 수</td>
          <td>평균 시도 횟수</td>
        </tr>
      </thead>
      <tbody>{Tbody}</tbody>
    </table>
  );
}
