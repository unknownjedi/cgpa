import React, { Component } from "react";
import List from "../data/list.json";
import Difference from "../data/diffrence.json";
import Grades from "../data/grades.json";
import SemModel from "./semModel";

class Calculator extends Component {
  state = {
    list: [],
    difference: {},
    grades: [],
    visited: [],
  };

  constructor() {
    super();
    const list = [...List];
    const difference = { ...Difference };
    const grades = [...Grades];
    const visited = [];
    this.state = { list, difference, grades, visited, sem: 0 };
    this.fileReader = new FileReader();
    this.fileReader.onload = (event) => {
      this.setState({ list: JSON.parse(event.target.result) }, () => {
        console.log(this.state.list);
      });
    };
  }

  componentDidMount = () => {
    this.updateGPA();
  };

  updateGPA = () => {
    let list = [...this.state.list];
    for (let semester in list) {
      list[semester]["gpa"] = this.getGPA(list[semester]["sem"]);
      list[semester]["cgpa"] = this.getCGPA(list[semester]["sem"]);
    }
    this.setState({ list });
  };

  getGPA = (sem) => {
    let list = [...this.state.list];
    let difference = { ...this.state.difference };
    let calc = 0;
    let totalCredit = 0;
    for (let subject in list[sem - 1]["subjects"]) {
      let sub = list[parseInt(sem) - 1]["subjects"][subject];
      let grade = this.getGradeValue(sub["grade"]);
      calc = calc + sub["credit"] * grade;
      totalCredit = totalCredit + sub["credit"];
    }
    if (difference["difference"].includes(sem)) {
      let sub = list[parseInt(sem) - 1]["difference"][this.props.branch];
      let grade = this.getGradeValue(sub["grade"]);
      calc = calc + sub["credit"] * grade;
      totalCredit = totalCredit + sub["credit"];
    }
    if (difference["dropdown"].includes(sem)) {
      let sub = list[parseInt(sem) - 1]["elective"];
      let grade = this.getGradeValue(sub["grade"]);
      calc = calc + sub["credit"] * grade;
      totalCredit = totalCredit + sub["credit"];
    }

    let gpa = calc / totalCredit;
    return gpa.toFixed(2);
  };

  getCGPA = (semNo) => {
    let list = [...this.state.list];
    let difference = { ...this.state.difference };
    let calc = 0;
    let totalCredit = 0;
    for (let semester in list) {
      let sem = list[semester]["sem"];
      for (let subject in list[sem - 1]["subjects"]) {
        let sub = list[sem - 1]["subjects"][subject];
        let grade = this.getGradeValue(sub["grade"]);
        calc = calc + sub["credit"] * grade;
        totalCredit = totalCredit + sub["credit"];
      }
      if (difference["difference"].includes(sem)) {
        let sub = list[parseInt(sem) - 1]["difference"][this.props.branch];
        let grade = this.getGradeValue(sub["grade"]);
        calc = calc + sub["credit"] * grade;
        totalCredit = totalCredit + sub["credit"];
      }
      if (difference["dropdown"].includes(sem)) {
        let sub = list[parseInt(sem) - 1]["elective"];
        let grade = this.getGradeValue(sub["grade"]);
        calc = calc + sub["credit"] * grade;
        totalCredit = totalCredit + sub["credit"];
      }
      if (sem === semNo) break;
    }
    let cgpa = calc / totalCredit;
    return cgpa.toFixed(2);
  };

  getGradeValue(grade) {
    let grades = [...this.state.grades];
    for (let g in grades) {
      if (grades[g].grade === grade) {
        return grades[g].value;
      }
    }
    return 0;
  }

  handleSemClick = async (semNo) => {
    const sem = parseInt(semNo);
    await this.setState({ sem });
  };

  handleModelClose = (sem) => {
    let visited = [...this.state.visited];
    if (!visited.includes(sem)) visited.push(sem);
    this.setState({ visited, sem: 0 });
  };

  updateGrade = (sem, sub, diff, drop) => {
    let list = [...this.state.list];
    list[sem - 1] = this.updateSubjectGrade(list[sem - 1], sub, drop);
    this.setState({ list });
    this.updateGPA();
  };

  updateSubjectGrade(subjects, sub, diff, drop) {
    for (let s in subjects["subjects"]) {
      if (s.subject === sub.subject && s.credit === sub.credit) {
        s.grade = sub.grade;
      }
    }
    if (diff && subjects["difference"]) {
      let s = subjects["difference"][this.props.branch];
      if (s.subject === sub.subject && s.credit === sub.credit) {
        s.grade = sub.grade;
      }
    }
    if (drop && subjects["dropdown"]) {
      for (let s in subjects["dropdown"]) {
        if (s.subject === sub.subject && s.credit === sub.credit) {
          s.grade = sub.grade;
        }
      }
    }
    return subjects;
  }

  updateElective = (sem, sub) => {
    let list = [...this.state.list];
    let s = list[sem - 1]["elective"];
    if (s) {
      s.subject = sub.subject;
    }
    list[sem - 1]["elective"] = s;
    this.setState({ list });
  };

  downloadJsonFile = async () => {
    const { list } = this.state;
    const fileName = "cgpa_calculator_save_file";
    const jsonList = JSON.stringify(list);
    const blob = new Blob([jsonList], { type: "application/json" });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  uploadFile = (event) => {
    let file = event.target.files[0];
    console.log(file);
    this.fileReader.readAsText(file);
  };
  render() {
    return (
      <React.Fragment>
        <div className="buttons row">
          <button className="btn btn-success" onClick={this.downloadJsonFile}>
            Download <i className="fa fa-download"></i>
          </button>
          <div className="upload-btn">
            <button className="btn btn-primary">
              Upload <i className="fa fa-upload"></i>
            </button>
            <input
              type="file"
              onChange={this.uploadFile}
              accept=".json"
              className="upload-btn-input"
            />
          </div>
        </div>
        <div className="container calculator">
          {this.state.sem !== 0 && (
            <SemModel
              list={this.state.list}
              difference={this.state.difference}
              grades={this.state.grades}
              sem={this.state.sem}
              close={this.handleModelClose}
              branch={this.props.branch}
              updateGrade={this.updateGrade}
              updateElective={this.updateElective}
            />
          )}
          {this.state.list.map((sem) => {
            if (!sem) {
              return null;
            }
            let dot = "red";
            if (this.state.visited.includes(sem["sem"])) {
              dot = "green";
            }
            return (
              <div
                key={sem["sem"]}
                className="card sem-card"
                onClick={() => this.handleSemClick(sem["sem"])}
              >
                <div className={`dot ${dot}`}></div>
                <div className="content">
                  <b>Sem {sem["sem"]}</b>
                </div>
                <div className="content">
                  <span>GPA - {sem["gpa"]}</span>
                  <br />
                  <span>CGPA - {sem["cgpa"]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Calculator;
