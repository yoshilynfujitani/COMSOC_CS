import React, { useEffect } from "react";
import { useUsers } from "./useUsers";
import Spinner from "../../ui/Spinner";
import { Toaster } from "react-hot-toast";
import { useUpdatePoints } from "./useUpdatePoints";
import { useDeleteUser } from "./useDeleteuser";

import { useLogout } from "../Auth/useLogout";

const Dashboard = () => {
  const { students_info, isLoading } = useUsers();
  const { updatePoints, isUpdating } = useUpdatePoints();
  const { deleteUser, isDeleting } = useDeleteUser();

  const { logout } = useLogout();
  if (isLoading) return <Spinner />;

  function handleUpdate(id, pts) {
    const updatedPoints = pts - 5;

    updatePoints({ userId: id, value: updatedPoints });
  }

  return (
    <div>
      <Toaster position="top-left" reverseOrder={false} />
      <h1>You are currently on Administrative Mode</h1>
      <button onClick={logout}>Logout</button>
      <table className="table-fixed">
        <thead>
          <tr>
            <th>User</th>
            <th>Student Name</th>
            <th>Points</th>
            <th>Tools</th>
          </tr>
        </thead>
        <tbody>
          {students_info.map((stud) => (
            <tr key={stud.id}>
              <td>{stud.id}</td>
              <td>{stud.user_bio[0].userName}</td>
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
