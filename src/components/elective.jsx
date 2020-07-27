import React from "react";
import GradeBox from "./gradeBar";

const Elective = ({ sem, sub, grades, updateElective, changeGrade }) => {
  return (
    <tr>
      <td>
        <select
          value={sub.elective.subject}
          onChange={(e) => updateElective(sem, sub, e.target.value)}
        >
          {sub.dropdown.map((s) => {
            return (
              <option key={s.subject} value={s.subject}>
                {s.subject}
              </option>
            );
          })}
        </select>
      </td>
      <td>{sub.dropdown[0].credit}</td>
      <td>
        <GradeBox sub={sub.elective} grades={grades} onChange={changeGrade} />
      </td>
      <td></td>
    </tr>
  );
};

export default Elective;
