const students = [
    {'Name': 'Alex', 'Surname': 'Sanya', 'AverageMark': 3 },
    {'Name': 'Vanya', 'Surname': 'Vanek', 'AverageMark': 4 },
    {'Name': 'Vlados', 'Surname': 'Kapparos', 'AverageMark': 9.5 },
    {'Name': 'Qwerty', 'Surname': 'Qwertovich', 'AverageMark': 6.5 }
];

function StudentTable(props) {
    const { students } = props;
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>AverageMark</th>
            </tr>
            {students.map((student, i) => 
                <StudentRow student={students[i]} color={i % 2 ? '#778899' : '#C0C0C0'} />)}
        </table>
    );
}

function StudentRow(props) {
    const { student } = props;

    function averageMarkRange() {
        if (student.AverageMark < 4) return '#FF0000';
        if (student.AverageMark >= 4 && student.AverageMark < 6) return '#F4A460';
        if (student.AverageMark >= 6 && student.AverageMark < 9) return '#FFFF00';
        if (student.AverageMark >= 9 && student.AverageMark < 10) return '#00FF00';
    }
    
    return (
        <tr style={{background: props.color}}>
            <td>{student.Name}</td>
            <td>{student.Surname}</td>
            <td style={{color: averageMarkRange()}}>{student.AverageMark}</td>
        </tr>
    );
}

ReactDOM.render(
    <StudentTable students={students} />,
    document.getElementById('app')
)