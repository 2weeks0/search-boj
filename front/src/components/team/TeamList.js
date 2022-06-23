import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectTeam } from "../../store/slices/teamSlice";
import UserInfo from "./UserInfo";

const FloatClear = styled.div`
  clear: both;
`;

export default function TeamList() {
  const team = useSelector(selectTeam);

  const UserInfoListComponent = team.map((it) => (
    <UserInfo style={{ float: "left" }} user={it} key={it.handle} isTeammate={true} />
  ));

  return (
    <div>
      <h1>등록된 팀원</h1>
      <br />
      {team.length ? (
        <>
          {UserInfoListComponent}
          <FloatClear />
        </>
      ) : (
        <h5>없다.</h5>
      )}
    </div>
  );
}
