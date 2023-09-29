import React from "react";
import { FaMedal } from "react-icons/fa";

const Scoreboard = ({ rankingData }) => {
  console.log(rankingData);
  return (
    <div className="text-center my-10 md:my-16">
      <h1 className="text-blue-800 font-semibold text-2xl flex items-center justify-center gap-2">
        <span className="text-yellow-400 ">
          <FaMedal />
        </span>
        Scoreboard
      </h1>
      <p>Top 10</p>
      <table class="table-fixed bg-white opacity-90 w-full rounded-md text-center ">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Year and Section</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody className="gap-2">
          {rankingData.map((student, index) => (
            <tr
              key={index}
              className={`bg-opacity-40 rounded-md ${
                index === 0
                  ? "bg-yellow-400"
                  : index === 1
                  ? "bg-slate-600"
                  : index === 2
                  ? "bg-amber-700"
                  : ""
              }`}
            >
              <td>{index + 1}</td>
              <td>{student.Name}</td>
              <td>{student.Year_Section}</td>
              <td>{student.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scoreboard;
