'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
  
    // for(let i=0;i<filteredPeople.length;i++){
    //     console.log(filteredPeople["firstName"]);
    // }
    // // Rather than console logging, you need to append the filteredPeople to a table.
    // if(filteredPeople.length > 0){
    //     let table = document.createElement('table');
    //     let row = table.insertRow();
    //     let cell = row.insertCell();
    //     cell.textContent = filteredPeople[0].firstName;
    //     let newCell=row.insertCell();
    //     newCell.textContent = filteredPeople[0].lastName;
    //     document.body.appendChild(table);
        
        
    // }else{
    //     alert('Sorry, looks like there is no one with that name.');
    // }
    function addRow(myTable){
        let tableRef = document.getElementById("myTable");
        let newRow = tableRef.insertRow(1);
        let newCell = newRow.insertCell(0);
        let newText = document.createTextNode(filteredPeople[0].firstName);
        newCell.appendChild(newText);
    }
    addRow(myTable);
}
