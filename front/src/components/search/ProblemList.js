import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";

import { selectTeam } from "../../store/slices/teamSlice";
import { selectTierFilter } from "../../store/slices/filterSlice";
import { search } from "../../api";
import ProblemInfo from "./ProblemInfo";

export default function ProblemList() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(undefined);

  const team = useSelector(selectTeam);
  const tierFilter = useSelector(selectTierFilter);
  const [ref, inView] = useInView();

  
  useEffect(() => {
    setData(undefined);
  }, [tierFilter]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const newData = await search({ team, page, tierFilter });
    setData((prev) => {
      if (!prev) {
        return newData;
      }
      const items = [...prev.items, ...newData.items];
      return {
        count: prev.count,
        items: items.filter(
          (v, idx) => idx === items.findIndex((it) => it.problemId === v.problemId)
        ),
      };
    });
    setTimeout(() => setLoading(false), 1000);
  }, [team, page, tierFilter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [inView, loading]);

  if (!data) {
    return <h1>{loading ? "찾는 중..." : "데이터가 없어요."}</h1>;
  }

  const handleClick = (problemId) => {
    const newWindow = window.open(
      `https://www.acmicpc.net/problem/${problemId}`,
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  const Tbody = data.items.map((it, idx) =>
    idx === data.items.length - 20 ? (
      <tr ref={ref} key={idx} onClick={() => handleClick(it.problemId)}>
        <ProblemInfo problem={it} />
      </tr>
    ) : (
      <tr key={idx} onClick={() => handleClick(it.problemId)}>
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
