import React from "react";

function onGradeChange(sub, val, props) {
  sub.grade = val;
  props.onChange(props.sem, sub);
}

const GradeBox = (props) => {
  let { sub, grades } = props;
  return (
    <select
      value={sub.grade}
      onChange={(event) => onGradeChange(sub, event.target.value, props)}
    >
      {grades.map((grade) => {
        return (
          <option key={grade.value} value={grade.grade}>
            {grade.grade}
          </option>
        );
      })}
    </select>
  );
};

export default GradeBox;
