let MassiveStudents = [];

MassiveStudents[1] = {
	name: "Иван",
	surname: "Иванов",
	age: 19,
	mark: 9,
};

MassiveStudents[2] = {
	name: "Алексей",
	surname: "Алексеев",
	age: 20,
	mark: 9
};

MassiveStudents[3] = {
	name: "Александр",
	surname: "Александр",
	age: 17,
	mark: 7
};

MassiveStudents[4] = {
	name: "Михаил",
	surname: "Михайлов",
	age: 17,
	mark: 7
};

var elem = document.querySelector('.elem');

createTable(elem, 4, 5);

function createTable(parent, cols, rows){	
	var table = document.createElement('table');

	table.setAttribute("id", "tbl");

	for(var i = 0; i < rows; i++){
		var tr = document.createElement('tr');	

		for(var j = 0; j < cols; j++){
			if(i === 0){
				tr.innerHTML = `<th>Name</th><th>Lastname</th><th>Age</th><th>Mark</th>`;
			}
			else {
				var td = document.createElement('td');
				if(j === 0) {
					td.innerHTML = MassiveStudents[i].name
					tr.appendChild(td); 	
				}
				else if(j === 1) {
					td.innerHTML = MassiveStudents[i].surname
					tr.appendChild(td); 	
				}
				else if(j === 2) {
					td.innerHTML = MassiveStudents[i].age
					tr.appendChild(td); 	
				}
				else if(j === 3) {
					td.innerHTML = MassiveStudents[i].mark
					tr.appendChild(td); 	
					sum = 0; 
				}
			}
		}

		table.appendChild(tr);
	}

	parent.appendChild(table);
}

var rIndex, table = document.getElementById("tbl");

function addHTMLtableRow(){
	if(!checkemptyinput())
	var table = document.getElementById("tbl");
	newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
	cell2 = newRow.insertCell(1);
	cell3 = newRow.insertCell(2);
	cell4 = newRow.insertCell(3);
	name = document.getElementById("name").value;	
	sname = document.getElementById("sname").value;
	age = document.getElementById("age").value;
	mark = document.getElementById("mark").value;

	cell1.innerHTML = name;
	cell2.innerHTML = sname;
	cell3.innerHTML = age;
	cell4.innerHTML = mark;
}

function selectedRowToInput(){
	
	for(var i = 1; i < table.rows.length; i++){
		table.rows[i].onclick = function(){
			rIndex = this.rowIndex;
			document.getElementById("name").value = this.cells[0].innerHTML;
			document.getElementById("sname").value = this.cells[1].innerHTML;
			document.getElementById("age").value = this.cells[2].innerHTML;
			document.getElementById("mark").value = this.cells[3].innerHTML;
		}
	}
}
selectedRowToInput();

function editHtmlTableSelectedRow(){
	var name = document.getElementById("name").value;
	var sname = document.getElementById("sname").value;
	var age = document.getElementById("age").value;
	var mark = document.getElementById("mark").value;

	table.rows[rIndex].cells[0].innerHTML = name;
	table.rows[rIndex].cells[1].innerHTML = sname;	
	table.rows[rIndex].cells[2].innerHTML = age;
	table.rows[rIndex].cells[3].innerHTML = mark;
}

function removeSelectedRow(){
	table.deleteRow(rIndex);
	document.getElementById("name").value = "";
	document.getElementById("sname").value = "";
	document.getElementById("age").value = "";
	document.getElementById("mark").value = "";
}

function checkemptyinput(){
	var isEmpty = false,
	name = document.getElementById("name").value;
	sname = document.getElementById("sname").value;
	age = document.getElementById("age").value;
	mark = document.getElementById("mark").value;
	if(name === ""){
		alert("Warning!");
		isEmpty = true;
	}
	else if(sname === ""){
		alert("Warning!");
		isEmpty = true;
	}
	else if(age === ""){
		alert("Warning!");
		isEmpty = true;
	}
	else if(mark === ""){
		alert("Warning!");
		isEmpty = true;
	}
	return isEmpty;
}

var button = document.querySelector('#button');

function CountAverageMark() {
	var table = document.querySelector('#tbl');
	
	var trs = table.querySelectorAll('tr');
	var colsNum = trs[1].querySelectorAll('td').length;
	
	for (var i = 3; i < colsNum; i++) {
		var tdNumber = i + 1;
		var tds = table.querySelectorAll('td:nth-child(' + tdNumber + ')');
		var sum = 0;
		
		for (var j = 0; j < tds.length; j++) {
			sum += Number(tds[j].innerHTML);
		}
	}

	document.getElementById('suma').innerHTML = 'Средний балл всех студентов в таблице: ' + sum;
}