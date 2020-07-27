import React, { Component } from "react";

class GradeBox extends Component {
  state = {};

  onGradeChange = (grade) => {
    let { sub, reappear, onChange } = this.props;
    // this.sub.grade = val;
    onChange(sub, grade, reappear);
  };
  render() {
    let { sub, grades } = this.props;
    return (
      <select
        value={sub.grade}
        onChange={(event) => this.onGradeChange(event.target.value)}
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
  }
}

export default GradeBox;
