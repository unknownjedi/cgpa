import React, { Component } from "react";
import Elective from "./elective";
import SubjectRow from "./subjectRow";

class SemModel extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      diff: false,
      drop: false,
    };
  }
  changeGrade = (sem, sub) => {
    this.props.updateGrade(sem, sub, this.state.diff, this.state.drop);
  };
  changeDropdown = (sem, sub, val) => {
    sub.subject = val;
    this.props.updateElective(sem, sub);
  };

  componentDidMount = () => {
    let { difference, sem } = this.props;
    if (difference.difference.includes(sem)) {
      this.setState({ diff: true });
    }
    if (difference.dropdown.includes(sem)) {
      this.setState({ drop: true });
    }
  };
  render() {
    let { list, grades, sem: semNo, close, branch } = this.props;
    const sem = parseInt(semNo);
    return (
      <div className="sem-model">
        <div className="sem-model-background"></div>
        <div className="container card sem-model-card">
          <div className="model-header">
            <div className="sem-name">
              <b>Sem {sem}</b>
            </div>
            <div className="close-btn" onClick={() => close(sem)}>
              <i className="fa fa-close"></i>
            </div>
          </div>
          <div className="sem-form">
            <table className="table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Credit</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {list[sem - 1]["subjects"].map((s) => {
                  return (
                    <SubjectRow
                      key={s.subject}
                      sem={sem}
                      sub={s}
                      grades={grades}
                      changeGrade={this.changeGrade}
                    />
                  );
                })}
                {this.state.diff && (
                  <SubjectRow
                    sem={sem}
                    sub={list[sem - 1]["difference"][branch]}
                    grades={grades}
                    changeGrade={this.changeGrade}
                  />
                )}
                {this.state.drop && (
                  <Elective
                    sem={sem}
                    sub={list[sem - 1]}
                    grades={grades}
                    updateElective={this.changeDropdown}
                    changeGrade={this.changeGrade}
                  />
                )}
              </tbody>
            </table>
          </div>
          <div className="model-footer">
            <button
              className="btn btn-primary m-2 save-btn"
              onClick={() => close(sem)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SemModel;
