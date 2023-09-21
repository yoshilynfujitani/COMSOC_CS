import React from "react";
import { useUser } from "../Auth/useUser";
import { useUsername } from "../Dashboard/useUsername";
import { useLogout } from "../Auth/useLogout";
import { useUsers } from "../Dashboard/useUsers";
import Spinner from "../../ui/Spinner";

const Home = () => {
  const { logout, isLoading } = useLogout();
  const { user } = useUser();
  const { userName } = useUsername();
  const { students_info, isLoading: Loading } = useUsers();

  if (Loading) return <Spinner />;

  const currentStud_info = students_info?.find(
    (stud) => stud.user_id === user.id
  );

  console.log(students_info);
  console.log(user.id);
  console.log(currentStud_info);

  return (
    <div>
      <h1>Welcome Back! {currentStud_info.user_bio[0].userName}</h1>
      <button disabled={isLoading} onClick={logout}>
        Logout
      </button>
      <h1>You currently have {currentStud_info.points} points!</h1>
    </div>
  );
};

export default Home;
