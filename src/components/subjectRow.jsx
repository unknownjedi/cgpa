import React from "react";
import GradeBox from "./gradeBar";

const SubjectRow = ({ sem, sub: s, grades, changeGrade }) => {
  return (
    <tr>
      <td>{s.subject}</td>
      <td>{s.credit}</td>
      <td>
        <GradeBox sem={sem} sub={s} grades={grades} onChange={changeGrade} />
      </td>
    </tr>
  );
};

export default SubjectRow;
