import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiMessageAltMinus } from "react-icons/bi";

import { useUpdatePoints } from "../Pages/Dashboard/useUpdatePoints";
import { useDeleteUser } from "../Pages/Dashboard/useDeleteuser";

const Table = ({ data }) => {
  const { updatePoints, isUpdating } = useUpdatePoints();
  const { deleteUser, isDeleting } = useDeleteUser();
  function handleUpdate(id, pts) {
    const updatedPoints = pts - 5;

    updatePoints({ userId: id, value: updatedPoints });
  }
  return (
    <table className="table-fixed text-center md:w-full ">
      <thead>
        <tr className="border-b-[1px]">
          <th>User</th>
          <th>Student Name</th>
          <th>Points</th>
          <th>Tools</th>
        </tr>
      </thead>
      <tbody>
        {data.map((stud) => (
          <tr key={stud.id} className="border-b-[1px] ">
            <td className="py-2">{stud.id}</td>
            <td className="py-2">{stud.Name}</td>
            <td className="py-2">{stud.points}</td>
            <td className="flex py-2">
              <div className="md:hidden">Setting</div>
              <div className="hidden  w-full md:flex md:items-center justify-center gap-2 text-2xl ">
                <button
                  disabled={isUpdating}
                  onClick={() => handleUpdate(Number(stud.id), stud.points)}
                >
                  <BiMessageAltMinus />
                </button>
                <button
                  disabled={isDeleting}
                  onClick={() => deleteUser(stud.id)}
                  className="text-red-500"
                >
                  <BsTrash />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
