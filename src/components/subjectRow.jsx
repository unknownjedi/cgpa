import React from "react";
import GradeBox from "./gradeBar";

const SubjectRow = ({ sub: s, grades, changeGrade, reappear = false }) => {
  return (
    <tr>
      <td>{s.subject}</td>
      <td>{s.credit}</td>
      <td>
        <GradeBox
          sub={s}
          grades={grades}
          onChange={changeGrade}
          reappear={reappear}
        />
      </td>
      <td></td>
    </tr>
  );
};

export default SubjectRow;
