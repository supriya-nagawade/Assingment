var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Id"] = document.getElementById("Id").value;
    formData["Rollno"] = document.getElementById("rollno").value
    formData["LastName"] = document.getElementById("LastName").value
    formData["FirstName"] = document.getElementById("FirstName").value
    formData["MiddleName"] = document.getElementById("MiddleName").value;
    formData["DateofJoining"] = document.getElementById("DateofJoining").value;

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Id;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Rollno;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.LastName;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = FirstName;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = MiddleName;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = DateofJoining;   

    
     cell7 = newRow.insertCell(6);
     cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;

    document.getElementById("Id").value = selectedRow,cell1[0].innerHTML;
    document.getElementById("Rollno").value = selectedRow,cell1[1].innerHTML;
    document.getElementById("LastName").value = selectedRow,cell1[2].innerHTML;
    document.getElementById("FirstName").value = selectedRow,cell1[3].innerHTML;
    document.getElementById("MiddleName").value = selectedRow,cell1[4].innerHTML;
    document.getElementById("DateofJoining").value = selectedRow,cell1[5].innerHTML;



}
function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = formData.Id;
    selectedRow.cells[1].innerHTML = formData.Rollno;
    selectedRow.cells[2].innerHTML = formData.LastName;
    selectedRow.cells[3].innerHTML = formData.FirstName;
    selectedRow.cells[4].innerHTML = formData.MiddleName;
    selectedRow.cells[5].innerHTML = formData.DateofJoining;

}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Id").value = '';
    document.getElementById("Rollno").value = '';
    document.getElementById("LastName").value = '';
    document.getElementById("FirstName").value = '';
    document.getElementById("MiddleName").value = '';
    document.getElementById("DateofJoining").value = '';
    selectedRow = null;
}