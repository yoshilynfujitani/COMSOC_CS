import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { BiMessageAltMinus } from "react-icons/bi";

import { useUpdatePoints } from "../Pages/Dashboard/useUpdatePoints";
import { useDeleteUser } from "../Pages/Dashboard/useDeleteuser";
import { useUpdateOverallPoints } from "../Pages/Dashboard/useUpdateOverAllPoints";
import Modal from "../components/Modal";
import { AnimatePresence } from "framer-motion";

const Table = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [pointsToAddOrDeduct, setPointsToAddOrDeduct] = useState(0);

  const handleOpenModal = (stud) => {
    setSelectedStudent(stud);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
    setOpenModal(false);
  };
  const sortedData = data.slice().sort((a, b) => a.points - b.points);
  const { updatePoints, isUpdating } = useUpdatePoints();
  const { deleteUser, isDeleting } = useDeleteUser();
  const { updateOverallPoints } = useUpdateOverallPoints();
  function handleMinusUpdate(id, pts) {
    const updatedPoints = pts - pointsToAddOrDeduct;

    updatePoints({ userId: id, value: updatedPoints });
    setPointsToAddOrDeduct(0);
  }
  function handleAddUpdate(id, pts, overallPts) {
    const updatedPoints = pts + Number(pointsToAddOrDeduct);
    const updateTotalPoints = overallPts + Number(pointsToAddOrDeduct);
    console.log("ID:", id);
    console.log("Updated Points:", updatedPoints);
    console.log("Updated Total Points:", updateTotalPoints);
    console.log(pointsToAddOrDeduct);
    updateOverallPoints({
      userId: id,
      value: updatedPoints,
      overallValue: updateTotalPoints,
    });
    setPointsToAddOrDeduct(0);
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
              <div className="flex justify-center items-center w-full">
                <button
                  className="border rounded-md px-2 py-1 flex items-center gap-2 text-gray-600 bg-white hover:text-yellow-500 hover:border-yellow-400"
                  onClick={() => handleOpenModal(stud)}
                >
                  Edit
                </button>
                <AnimatePresence>
                  {selectedStudent && (
                    <Modal visible={openModal} onClose={handleCloseModal}>
                      <div className="text-left">
                        <div className="flex items-center  ">
                          <h1>
                            Currently editing {selectedStudent.Name}'s Points'{" "}
                          </h1>
                          <h1></h1>
                        </div>
                        <div className="flex flex-col">
                          <h1>Reduce Points</h1>
                          <div className="flex justify-between gap-2">
                            <input
                              type="number"
                              className="border rounded-md px-2 py-1"
                              defaultValue={pointsToAddOrDeduct}
                              onChange={(e) =>
                                setPointsToAddOrDeduct(e.target.value)
                              }
                            />
                            <button
                              onClick={() =>
                                handleMinusUpdate(
                                  selectedStudent.id,
                                  selectedStudent.points
                                )
                              }
                            >
                              Deduct
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <h1>Add Points</h1>
                          <div className="flex justify-between gap-2">
                            <input
                              type="number"
                              className="border rounded-md px-2 py-1"
                              defaultValue={pointsToAddOrDeduct}
                              onChange={(e) =>
                                setPointsToAddOrDeduct(e.target.value)
                              }
                            />
                            <button
                              onClick={() =>
                                handleAddUpdate(
                                  Number(selectedStudent.id),
                                  selectedStudent.points,
                                  selectedStudent.Total_Points
                                )
                              }
                            >
                              Add
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setOpenModal((currentVal) => !currentVal)
                          }
                        >
                          Close
                        </button>
                      </div>
                    </Modal>
                  )}
                </AnimatePresence>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
