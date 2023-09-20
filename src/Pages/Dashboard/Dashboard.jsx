import React, { useEffect } from "react";
import { useUsers } from "./useUsers";
import Spinner from "../../ui/Spinner";
import { Toaster } from "react-hot-toast";
import { useUpdatePoints } from "./useUpdatePoints";
import { useDeleteUser } from "./useDeleteuser";
import { getUser } from "../../Services/apiAuth";
import { useUser } from "../Auth/useUser";
import { getUserName } from "../../Services/apiGetUsers";
import { useUsername } from "./useUsername";

const Dashboard = () => {
  const { students_info, isLoading } = useUsers();
  const { updatePoints, isUpdating } = useUpdatePoints();
  const { deleteUser, isDeleting } = useDeleteUser();
  const { userName } = useUsername();
  const { user } = useUser();
  if (isLoading) return <Spinner />;

  function handleUpdate(id, pts) {
    const updatedPoints = pts - 5;

    updatePoints({ userId: id, value: updatedPoints });
  }
  const currentUser = userName?.find((userObj) => userObj.user_id === user.id);

  const CurrentuserName = currentUser ? currentUser.userName : "No name found";

  return (
    <div>
      <Toaster position="top-left" reverseOrder={false} />
      <h1>Current user: {CurrentuserName}</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th>User</th>
            <th>Points</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {students_info.map((stud) => (
            <tr key={stud.id}>
              <td>{stud.id}</td>
              <td>{stud.points}</td>
              <td className="flex">
                <button
                  disabled={isUpdating}
                  onClick={() => handleUpdate(Number(stud.id), stud.points)}
                >
                  Minus 5 pts
                </button>
                <button
                  disabled={isDeleting}
                  onClick={() => deleteUser(stud.id)}
                >
                  Delete user
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
