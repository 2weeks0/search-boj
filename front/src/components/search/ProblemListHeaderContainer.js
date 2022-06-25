import { useDispatch, useSelector } from "react-redux";

import { selectSort, setSort } from "../../store/slices/sortSlice";

import ProblemListHeader from "./ProblemListHeader";

export default function ProblemListHeaderContainer() {
  const headerList = [
    {
      col: "1",
      key: "id",
      name: "번호",
    },
    {
      col: "1",
      key: "level",
      name: "티어",
    },
    {
      col: "6",
      key: "title",
      name: "문제 이름",
    },
    {
      col: "2",
      key: "solved",
      name: "정답자 수",
    },
    {
      col: "2",
      key: "average_try",
      name: "평균 시도 횟수",
    },
  ];

  const sort = useSelector(selectSort);
  const dispatch = useDispatch();
  const handleClick = (key) => {
    dispatch(setSort(key));
  };

  return <ProblemListHeader headerList={headerList} sort={sort} onClick={handleClick} />;
}
