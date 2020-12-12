class Student {
    _firstName = '';
    _lastName = '';
    _averageMark = 0;

    constructor(firstName, lastName, averageMark) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._averageMark = averageMark;
    }

    get getFirstName() {
        return this._firstName;
    }

    get getLastName() {
        return this._lastName;
    }

    get getAverageMark() {
        return this._averageMark;
    }

    setTd(className, content) {
        const td = $('<td />');
        td.addClass(className);
        td.text(content);

        return td;
    }

    toJson() {
        return {
            firstName: this._firstName,
            lastName: this._lastName,
            averageMark: this._averageMark,
        };
    }

    writeIntoTable = (order) => {
        const tr = $('<tr />');
        tr.append(this.setTd('first-name', this.getFirstName));
        tr.append(this.setTd('last-name', this.getLastName));
        tr.append(this.setTd('average-mark', this.getAverageMark));
        $('table').append(tr);

        let editBtn = $('<td class="btn">Edit</td>');  
        tr.append(editBtn);

        $(editBtn).on('click', (e) => {
            indexStudentToEdit = Students.findIndex(x => x.getLastName == this.getLastName);
            let studentToEdit = Students.find(x => x.getLastName == this.getLastName);
            console.log(studentToEdit);
            $('.add_first_name').val(studentToEdit.getFirstName);
            $('.add_second_name').val(studentToEdit.getLastName);
            $('.add_average_mark').val(studentToEdit.getAverageMark);
            $('.add__row--btn').text('Save');
        });

        let btn = $('<td class="btn">Delete</td>');
        tr.append(btn);

        $(btn).on('click', (e) => {
            let index = Students.findIndex(x => x.getLastName == this.getLastName);
            Students.splice(index, 1);
            tr.remove();
            updateAverage();
            saveData();
        })
    }
}

getAverageMarkFromTable = () => {
    let sum = 0;

    for (let i = 0; i < Students.length; i++) {
        const mark = $('.average-mark')[i];
        sum += +mark.textContent;
    }

    let totalAverageMark = Math.round((sum / Students.length) * 100) / 100 ;
    return totalAverageMark;
}

const getData = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/json', false);
    xhr.send();
    if (xhr.status != 200) {
        alert( xhr.status + ': ' + xhr.statusText );
    };
    const obj = $.parseJSON(xhr.responseText);
    return obj;
};

const saveData = () => {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/json', true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send($.toJSON(Students.map(s => s.toJson())));
};

const obj = getData();

let Students = [];
let indexStudentToEdit = -1;

for (let i = 0; i < obj.length; i++) {
    const student = new Student(obj[i].firstName, obj[i].lastName, obj[i].averageMark);
    Students.push(student);
    student.writeIntoTable(i);
}

const textArea = $('<span />');
textArea.text('Average mark of all the student equals ' + getAverageMarkFromTable());
$('#text-content').append(textArea);

const updateAverage = () => {
    textArea.text('Average mark of all the student equals ' + getAverageMarkFromTable());
}

const clearForm = () => {
    $('.add_first_name').val('');
    $('.add_second_name').val('');
    $('.add_average_mark').val('');
    $('.add__row--btn').text('Add row');
};

const addButton = document.querySelector('.add__row--btn');
addButton.addEventListener('click', () => {
    const firstNameFromInput = $('.add_first_name').val();
    const secondNameFromInput = $('.add_second_name').val();
    const averageMarkFromInput = $('.add_average_mark').val();
    const student = new Student(firstNameFromInput, secondNameFromInput, averageMarkFromInput)

    if (indexStudentToEdit != -1) {
        Students[indexStudentToEdit] = student;
        const row = $('tr')[indexStudentToEdit + 1];
        const children = $(row).children();
        $(children[0]).text(student.getFirstName);
        $(children[1]).text(student.getLastName);
        $(children[2]).text(student.getAverageMark);
        indexStudentToEdit = -1;
    } else {
        Students.push(student);
        student.writeIntoTable(Student.length);
    }
    clearForm();
    saveData();
    updateAverage();
    
});
