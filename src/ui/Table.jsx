import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiMessageAltMinus } from "react-icons/bi";

import { useUpdatePoints } from "../Pages/Dashboard/useUpdatePoints";
import { useDeleteUser } from "../Pages/Dashboard/useDeleteuser";
import { useUpdateOverallPoints } from "../Pages/Dashboard/useUpdateOverAllPoints";

const Table = ({ data }) => {
  const sortedData = data.slice().sort((a, b) => a.points - b.points);
  const { updatePoints, isUpdating } = useUpdatePoints();
  const { deleteUser, isDeleting } = useDeleteUser();
  const { updateOverallPoints } = useUpdateOverallPoints();
  function handleMinusUpdate(id, pts) {
    const updatedPoints = pts - 5;

    updatePoints({ userId: id, value: updatedPoints });
  }
  function handleAddUpdate(id, pts, overallPts) {
    const updatedPoints = pts + 5;
    const updateTotalPoints = overallPts + 5;

    updateOverallPoints({
      userId: id,
      value: updatedPoints,
      overallValue: updateTotalPoints,
    });
  }
  return (
    <table className="table-fixed text-center md:w-full ">
      <thead>
        <tr className="border-b-[1px]">
          <th>User</th>
          <th>Student Name</th>
          <th>Current Points</th>
          <th>Overall Points</th>
          <th>Year and Section</th>

          <th>Tools</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((stud) => (
          <tr key={stud.id} className="border-b-[1px] ">
            <td className="py-2">{stud.id}</td>
            <td className="py-2">{stud.Name}</td>
            <td className="py-2">{stud.points}</td>
            <td className="py-2">{stud.Total_Points}</td>
            <td className="py-2">{stud.Year_Section}</td>
            <td className="flex py-2">
              <div className="md:hidden">Setting</div>
              <div className="hidden  w-full md:flex md:items-center justify-center gap-2 text-2xl ">
                <button
                  disabled={isUpdating}
                  onClick={() =>
                    handleMinusUpdate(Number(stud.id), stud.points)
                  }
                >
                  <BiMessageAltMinus />
                </button>
                <button
                  disabled={isUpdating}
                  onClick={() =>
                    handleAddUpdate(
                      Number(stud.id),
                      stud.points,
                      stud.Total_Points
                    )
                  }
                >
                  Add
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
