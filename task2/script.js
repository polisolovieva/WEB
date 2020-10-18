class Student {
    #firstName = '';
    #lastName = '';
    #averageMark = 0;

    constructor(firstName, lastName, averageMark) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#averageMark = averageMark;
    }

    get getFirstName() {
        return this.#firstName;
    }

    get getLastName() {
        return this.#lastName;
    }

    get getAverageMark() {
        return this.#averageMark;
    }

    setTd(className, content) {
        const td = document.createElement('td');
        td.className = className;
        td.textContent = content;
        return td;
    }

    writeIntoTable = (order) => {
        const tr = document.getElementsByTagName('tr')[order + 1];
        tr.appendChild(this.setTd('first-name', this.getFirstName));
        tr.appendChild(this.setTd('last-name', this.getLastName));
        tr.appendChild(this.setTd('average-mark', this.getAverageMark));
    }
}

getAverageMarkFromTable = (n) => {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const mark = document.getElementsByClassName('average-mark')[i];
        sum += +mark.textContent;
    }

    let totalAverageMark = Math.round((sum / n) * 100) / 100 ;
    return totalAverageMark;
}

const n = 3;

let firstNames = ['Alexander', 'Ivan', 'Petr'];
let lastNames = ['Alexandrov', 'Ivanov', 'Petrov'];
let averageMarks = [8.0, 9.5, 6.75];

let Students = [];

for (let i = 0; i < n; i++) {
    Students.push(new Student(firstNames[i], lastNames[i], averageMarks[i]));
    Students[i].writeIntoTable(i);
}

const textArea = document.createElement('span');
textArea.textContent = 'Average mark of all the student equals ' + getAverageMarkFromTable(n);
document.getElementById('text-content').appendChild(textArea);
