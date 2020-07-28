import React from "react";
import GradeBox from "./gradeBar";

function getBadgeClass(sem) {
  let color = "";
  if (sem === 1 || sem === 2) {
    color = "secondary";
  } else if (sem === 3 || sem === 4) {
    color = "primary";
  } else if (sem === 5 || sem === 6) {
    color = "warning";
  } else {
    color = "info";
  }

  return "badge badge-pill badge-" + color;
}

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
      <td>
        {reappear && <span className={getBadgeClass(s.sem)}>Sem {s.sem}</span>}
      </td>
    </tr>
  );
};

export default SubjectRow;
