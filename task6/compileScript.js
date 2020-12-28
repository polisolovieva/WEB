"use strict";

const students = [{
  'Name': 'Dio',
  'Surname': 'Brando',
  'AverageMark': 3
}, {
  'Name': 'Robert',
  'Surname': 'Speedwagon',
  'AverageMark': 6.5
}, {
  'Name': 'Joseph',
  'Surname': 'Jostar',
  'AverageMark': 9.5
}, {
  'Name': 'Jonatan',
  'Surname': 'Jostar',
  'AverageMark': 4
}];

function StudentTable(props) {
  const {
    students
  } = props;
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Surname"), /*#__PURE__*/React.createElement("th", null, "AverageMark")), students.map((student, i) => /*#__PURE__*/React.createElement(StudentRow, {
    student: students[i],
    color: i % 2 ? '#778899' : '#C0C0C0'
  })));
}

function StudentRow(props) {
  const {
    student
  } = props;

  function averageMarkRange() {
    if (student.AverageMark < 4) return '#FF0000';
    if (student.AverageMark >= 4 && student.AverageMark < 6) return '#F4A460';
    if (student.AverageMark >= 6 && student.AverageMark < 9) return '#FFFF00';
    if (student.AverageMark >= 9 && student.AverageMark < 10) return '#00FF00';
  }

  return /*#__PURE__*/React.createElement("tr", {
    style: {
      background: props.color
    }
  }, /*#__PURE__*/React.createElement("td", null, student.Name), /*#__PURE__*/React.createElement("td", null, student.Surname), /*#__PURE__*/React.createElement("td", {
    style: {
      color: averageMarkRange()
    }
  }, student.AverageMark));
}

ReactDOM.render( /*#__PURE__*/React.createElement(StudentTable, {
  students: students
}), document.getElementById('app'));