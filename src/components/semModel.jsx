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

  updateSemList = (list, sub, grade) => {
    let l = [];
    for (let i in list) {
      l[i] = { ...list[i] };
      if (list[i]["subject"] === sub["subject"]) {
        l[i]["grade"] = grade;
        if (grade === "RA") {
          l[i]["cleared"] = false;
        } else {
          l[i]["cleared"] = true;
        }
      }
    }
    return l;
  };

  updateSemListDiffDrop = (list, sub, grade) => {
    let l = [];
    l = { ...list };
    if (list["subject"] === sub["subject"]) {
      l["grade"] = grade;
      if (grade === "RA") {
        l["cleared"] = false;
      } else {
        l["cleared"] = true;
      }
    }
    return l;
  };

  changeGrade = (sub, grade, reappear) => {
    // let { list: l } = this.props;
    // let list = {
    //   ...l,
    //   subjects: [...l["subjects"]],
    //   reappear: [...["reappear"]],
    //   difference: {
    //     cs: {
    //       ...l["difference"]["cs"],
    //     },
    //     it: {
    //       ...l["difference"]["it"],
    //     },
    //   },
    // };
    let list = { ...this.props.list };
    if (this.props.list.difference) {
      list = {
        ...this.props.list,
        difference: {
          ...this.props.list.difference,
          cs: {
            ...this.props.list.difference.cs,
          },
          it: {
            ...this.props.list.difference.it,
          },
        },
      };
    }

    if (reappear) {
      list["reappear"] = this.updateSemList(list["reappear"], sub, grade);
    } else {
      list["subjects"] = this.updateSemList(list["subjects"], sub, grade);
      if (this.state.diff) {
        list["difference"][this.props.branch] = this.updateSemListDiffDrop(
          list["difference"][this.props.branch],
          sub,
          grade
        );
      }
      if (this.state.drop) {
        list["elective"] = this.updateSemListDiffDrop(
          list["elective"],
          sub,
          grade
        );
      }
    }
    this.props.updateGrade(list, sub, grade, reappear);
  };

  changeDropdown = (sem, sub, val) => {
    this.props.updateElective(sem, sub, val);
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {list["subjects"].map((s) => {
                  return (
                    <SubjectRow
                      key={s.subject}
                      sub={s}
                      grades={grades}
                      changeGrade={this.changeGrade}
                    />
                  );
                })}
                {this.state.diff && (
                  <SubjectRow
                    sub={list["difference"][branch]}
                    grades={grades}
                    changeGrade={this.changeGrade}
                  />
                )}
                {this.state.drop && (
                  <Elective
                    sem={sem}
                    sub={list}
                    grades={grades}
                    updateElective={this.changeDropdown}
                    changeGrade={this.changeGrade}
                  />
                )}
                {list["reappear"] &&
                  list["reappear"].map((r) => {
                    return (
                      <SubjectRow
                        key={r["subject"]}
                        sub={r}
                        grades={grades}
                        changeGrade={this.changeGrade}
                        reappear={true}
                      />
                    );
                  })}
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
