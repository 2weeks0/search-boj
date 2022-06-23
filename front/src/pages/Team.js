import { useSelector } from "react-redux";
import { selectUser } from "../store/slices/teamSlice";

import TeamList from "../components/team/TeamList";
import UserInput from "../components/team/UserInput";
import UserInfo from "../components/team/UserInfo";

export default function Team() {
  const user = useSelector(selectUser);

  return (
    <div>
      <TeamList />
      <br/>
      <UserInput />
      <br/>
      <UserInfo user={user} />
    </div>
  );
}
