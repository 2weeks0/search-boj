import { useState } from "react";
import { useDispatch } from "react-redux";

import { searchUserThunk } from "../../store/slices/teamSlice";

export default function UserInput() {
  const [keyword, setkeyword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setkeyword(e.target.value);
  }
  const handleClick = () => {
    dispatch(searchUserThunk(keyword));
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
        handleClick();
    }
  }

  return (
    <div>
      <h1>사용자 검색</h1>
      <input
        type="text"
        placeholder="아이디를 입력하세요."
        value={keyword}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>검색</button>
    </div>
  );
}
