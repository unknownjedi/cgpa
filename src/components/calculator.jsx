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
    reappear: [],
  };

  constructor() {
    super();
    const list = [
      {
        sem: 1,
        gpa: "7.96",
        cgpa: "7.96",
        subjects: [
          {
            subject: "Chemistry of Materials",
            credit: 4,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Communicative English",
            credit: 3,
            cleared: true,
            grade: "A+",
          },
          {
            subject: "Communication Skills Laboratory",
            credit: 2,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Mathematics – I",
            credit: 4,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Applied Physics",
            credit: 4,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Fundamentals of Computing",
            credit: 4,
            cleared: true,
            grade: "O",
          },
          {
            subject: "Computing Laboratory",
            credit: 2,
            cleared: true,
            grade: "B",
          },
        ],
      },
      {
        sem: 2,
        gpa: "8.14",
        cgpa: "8.05",
        subjects: [
          {
            subject: "Technical Communication",
            credit: 3,
            cleared: true,
            grade: "A+",
          },
          {
            subject: "Discrete Mathematics",
            credit: 4,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Mathematics – II",
            credit: 4,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Digital Systems",
            credit: 3,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Programming in C",
            credit: 3,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Digital Systems Laboratory",
            credit: 2,
            cleared: true,
            grade: "O",
          },
          {
            subject: "Programming in C Laboratory",
            credit: 2,
            cleared: true,
            grade: "A",
          },
        ],
      },
      {
        sem: 3,
        gpa: "5.26",
        cgpa: "7.09",
        subjects: [
          {
            subject: "Mathematics - III",
            credit: 4,
            cleared: false,
            grade: "RA",
          },
          {
            subject: "Data Structures",
            credit: 3,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Database Management Systems",
            credit: 3,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Microprocessors and Applications",
            credit: 4,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Object Oriented Programming in C++",
            credit: 3,
            cleared: false,
            grade: "RA",
          },
          {
            subject: "Data Structures Laboratory",
            credit: 2,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Database Management Systems Laboratory",
            credit: 2,
            cleared: true,
            grade: "A+",
          },
          {
            subject: "Object Oriented Programming Laboratory",
            credit: 2,
            cleared: true,
            grade: "B",
          },
        ],
      },
      {
        sem: 4,
        gpa: "5.96",
        cgpa: "6.79",
        subjects: [
          {
            subject: "Combinatorics and Graph Theory",
            credit: 4,
            cleared: true,
            grade: "B",
          },
          {
            subject: "Computer Architecture",
            credit: 3,
            cleared: false,
            grade: "RA",
          },
          {
            subject: "Java and Internet Programming",
            credit: 3,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Operating Systems",
            credit: 3,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Theory of Computation",
            credit: 4,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Java and Internet Programming Laboratory",
            credit: 2,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Operating Systems Laboratory",
            credit: 2,
            cleared: true,
            grade: "B",
          },
        ],
        difference: {
          cs: {
            subject: "Cryptography and Data Security",
            credit: 3,
            cleared: true,
            grade: "B",
          },
          it: {
            subject: "XML and Web Services Laboratory",
            credit: 2,
            cleared: false,
            grade: "RA",
          },
        },
      },
      {
        sem: 5,
        gpa: "7.00",
        cgpa: "6.83",
        subjects: [
          {
            subject: "Applied Statistics",
            credit: 4,
            cleared: true,
            grade: "B",
          },
          {
            subject: "Visual Programming",
            credit: 3,
            cleared: true,
            grade: "A+",
          },
          {
            subject: "Computer Networks",
            credit: 3,
            cleared: true,
            grade: "B",
          },
          {
            subject: "Design and Analysis of Algorithms",
            credit: 4,
            cleared: true,
            grade: "B",
          },
          {
            subject: "Software Engineering",
            credit: 3,
            cleared: true,
            grade: "B+",
          },
          {
            subject: "Data Mining and warehousing",
            credit: 3,
            cleared: true,
            grade: "B",
          },
          {
            subject: "Data Mining and Warehousing Laboratory",
            credit: 2,
            cleared: true,
            grade: "A",
          },
          {
            subject: "GUI Applications Laboratory",
            credit: 2,
            cleared: true,
            grade: "O",
          },
        ],
        reappear: [],
      },
      {
        sem: 6,
        gpa: "6.17",
        cgpa: "6.72",
        subjects: [
          {
            subject: "Environmental Science and Engineering",
            credit: 3,
            cleared: true,
            grade: "A+",
          },
          {
            subject: "Probability, Queuing Theory and Reliability",
            credit: 4,
            cleared: false,
            grade: "RA",
          },
          {
            subject: "Computer Graphics and Multimedia",
            credit: 3,
            cleared: true,
            grade: "B",
          },
          {
            subject: "Object Oriented Analysis and Design",
            credit: 3,
            cleared: true,
            grade: "A",
          },
          {
            subject: "Case Tools Laboratory",
            credit: 2,
            cleared: true,
            grade: "A+",
          },
          {
            subject: "Computer Graphics and Multimedia Laboratory",
            credit: 2,
            cleared: true,
            grade: "B",
          },
        ],
        difference: {
          cs: {
            subject: "Network Programming",
            credit: 4,
            cleared: true,
            grade: "B+",
          },
          it: {
            subject: "Network Management",
            credit: 3,
            cleared: false,
            grade: "RA",
          },
        },
        elective: {
          subject: "Information Coding Techniques",
          credit: 3,
          cleared: true,
          grade: "B+",
        },
        dropdown: [
          {
            subject: "Information Coding Techniques",
            credit: 3,
            cleared: false,
            grade: "RA",
          },
          {
            subject: "Pattern Recognition",
            credit: 3,
            cleared: false,
            grade: "RA",
          },
        ],
      },
      {
        sem: 7,
        gpa: "8.00",
        cgpa: "6.85",
        subjects: [
          {
            subject: "Industrial Project",
            credit: 16,
            grade: "A",
          },
        ],
      },
    ];
    const difference = { ...Difference };
    const grades = [...Grades];
    const visited = [];
    const reappear = [];
    this.state = { list, difference, grades, visited, reappear, sem: 0 };
    this.fileReader = new FileReader();
    this.fileReader.onload = (event) => {
      this.setState({ list: JSON.parse(event.target.result) }, () => {
        this.getReappearList();
        this.updateGPA();
        // console.log(this.state.list);
      });
    };
  }

  componentDidMount = () => {
    this.getReappearList();
    this.updateGPA();
  };

  updateGrade = (semList) => {
    let list = this.state.list;
    console.log("before", this.state.list);

    // let semester = semList["sem"];
    // list[semester - 1] = semList;
    // this.setState({ list });
    // console.log("sem 3", list[2]);
    // this.updateGPA();
  };

  updateElective = (sem, sub) => {
    let list = [...this.state.list];
    let s = list[sem - 1]["elective"];
    if (s) {
      s.subject = sub.subject;
    }
    list[sem - 1]["elective"] = s;
    this.setState({ list });
  };

  updateGPA = () => {
    let list = [...this.state.list];
    for (let semester in list) {
      list[semester]["gpa"] = this.getGPA(list[semester]["sem"]);
      list[semester]["cgpa"] = this.getCGPA(list[semester]["sem"]);
    }
    this.setState({ list });
    this.getReappearList();
  };

  getGPA = (sem) => {
    let list = [...this.state.list];
    let calc = 0;
    let totalCredit = 0;

    let result = this.calculateForSem(list, sem, calc, totalCredit);
    calc = result[0];
    totalCredit = result[1];
    let gpa = calc / totalCredit;
    return gpa ? gpa.toFixed(2) : 0.0;
  };

  getCGPA = (semNo) => {
    let list = [...this.state.list];
    let calc = 0;
    let totalCredit = 0;
    for (let semester in list) {
      let sem = list[semester]["sem"];
      let result = this.calculateForSem(list, sem, calc, totalCredit);
      calc = result[0];
      totalCredit = result[1];
      if (sem === semNo) break;
    }
    let cgpa = calc / totalCredit;
    return cgpa ? cgpa.toFixed(2) : 0.0;
  };

  calculatorLogic(sub, calc, totalCredit) {
    let grade = this.getGradeValue(sub["grade"]);
    let credit = grade ? sub["credit"] : 0;
    calc = calc + credit * grade;
    totalCredit = totalCredit + credit;
    return [calc, totalCredit];
  }

  calculateForSem(list, sem, calc, totalCredit) {
    let difference = { ...this.state.difference };
    for (let subject in list[sem - 1]["subjects"]) {
      let sub = list[parseInt(sem) - 1]["subjects"][subject];
      let result = this.calculatorLogic(sub, calc, totalCredit);
      calc = result[0];
      totalCredit = result[1];
    }
    if (difference["difference"].includes(sem)) {
      let sub = list[parseInt(sem) - 1]["difference"][this.props.branch];
      let result = this.calculatorLogic(sub, calc, totalCredit);
      calc = result[0];
      totalCredit = result[1];
    }
    if (difference["dropdown"].includes(sem)) {
      let sub = list[parseInt(sem) - 1]["elective"];
      let result = this.calculatorLogic(sub, calc, totalCredit);
      calc = result[0];
      totalCredit = result[1];
    }
    if (list[sem - 1]["reappear"]) {
      for (let i in list[sem - 1]["reappear"]) {
        let sub = list[parseInt(sem) - 1]["reappear"][i];
        let result = this.calculatorLogic(sub, calc, totalCredit);
        calc = result[0];
        totalCredit = result[1];
      }
    }
    return [calc, totalCredit];
  }

  getGradeValue(grade) {
    let grades = [...this.state.grades];
    for (let g in grades) {
      if (grades[g].grade === grade) {
        return grades[g].value;
      }
    }
    return 0;
  }

  getReappearList = async () => {
    // console.log("before reappear list", this.state.list);
    let list = [...this.state.list];
    let difference = { ...this.state.difference };
    let reappear = [];
    for (let semester in list) {
      for (let subject in list[semester]["subjects"]) {
        let sub = list[semester]["subjects"][subject];
        if (sub["grade"] === "RA" && !sub["cleared"]) {
          sub["sem"] = parseInt(semester) + 1;
          reappear = [...reappear, sub];
        }
      }
      for (let subject in list[semester]["reappear"]) {
        let sub = list[semester]["reappear"][subject];
        if (sub["grade"] !== "RA") {
          for (let i in list[sub["sem"] - 1]["subjects"]) {
            if (list[sub["sem"] - 1]["subjects"][i] === sub["subject"]) {
              list[sub["sem"] - 1]["subjects"][i]["cleared"] = true;
              list[sub["sem"] - 1]["subjects"][i]["grade"] = "RA";
              reappear = reappear.filter(
                (r) => r["subject"] !== sub["subject"]
              );
            }
          }
        }
      }
      if (difference["difference"].includes(semester)) {
        let sub = list[semester]["difference"][this.props.branch];
        if (sub["grade"] === "RA") {
          sub["sem"] = parseInt(semester) + 1;
          reappear = [...reappear, sub];
        }
      }
      if (difference["dropdown"].includes(semester)) {
        let sub = list[semester]["elective"];
        if (sub["grade"] === "RA") {
          sub["sem"] = parseInt(semester) + 1;
          reappear = [...reappear, sub];
        }
      }
    }
    await this.setState({ reappear });
    console.log("reappear", this.state.reappear);
    this.updateReappearList();
  };

  updateReappearList = () => {
    let list = [...this.state.list];
    for (let i in list) {
      let l = list[i];
      l["reappear"] = this.getReappearListForSem(parseInt(i) + 1);
    }
    this.setState({ list }, () => {
      // console.log("after reappear list", this.state.list);
    });
  };

  getReappearListForSem = (sem) => {
    let { reappear } = this.state;
    // console.log("reappear", reappear);
    let oddList = [];
    let evenList = [];
    let odd = sem % 2;
    for (let i in reappear) {
      let s = reappear[i]["sem"];
      if (s < sem) {
        if (s % 2) {
          oddList = [...oddList, reappear[i]];
        } else {
          evenList = [...evenList, reappear[i]];
        }
      }
    }
    let reappearList = [];
    if (odd) {
      reappearList = oddList;
    } else {
      reappearList = evenList;
    }
    // this.setState({ reappearList });
    // console.log(sem, reappearList);
    return reappearList;
  };

  handleSemClick = async (semNo) => {
    const sem = parseInt(semNo);
    await this.setState({ sem });
  };

  handleModelClose = (sem) => {
    let visited = [...this.state.visited];
    if (!visited.includes(sem)) visited.push(sem);
    this.setState({ visited, sem: 0 });
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
    // console.log(file);
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
              list={this.state.list[this.state.sem - 1]}
              difference={this.state.difference}
              grades={this.state.grades}
              sem={this.state.sem}
              reappear={this.state.reappear}
              close={this.handleModelClose}
              branch={this.props.branch}
              updateGrade={this.updateGrade}
              updateElective={this.updateElective}
              handleReappear={this.handleReappear}
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
