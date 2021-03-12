'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;

    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if(person.firstName === firstNameInput || person.lastName === lastNameInput){
            return true;
        }
        return false;
    });
    function addRow(){
        console.log(filteredPeople);
        for (let i=0; i<filteredPeople.length; i++){
        let tableRef = document.getElementById("myTable");
        let tableRow1 = tableRef.insertRow(1);
        let newCell1 = tableRow1.insertCell(0);
        let newCell2 = tableRow1.insertCell(1);
        let newCell3 = tableRow1.insertCell(2);
        let newCell4 = tableRow1.insertCell(3);
        let newCell5 = tableRow1.insertCell(4);
        let firstNames = document.createTextNode(filteredPeople[i].firstName);
        let lastNames =document.createTextNode(filteredPeople[i].lastName);
        let personAge = document.createTextNode(filteredPeople[i].age);
        let personHeight =document.createTextNode(filteredPeople[i].height);
        let personWeight =document.createTextNode(filteredPeople[i].weight)
        newCell1.appendChild(firstNames);
        newCell2.appendChild(lastNames);
        newCell3.appendChild(personAge);
        newCell4.appendChild(personHeight);
        newCell5.appendChild(personWeight);
        }
    }
    addRow();
    

}

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
//     function addRow(myTable){
//         let tableRef = document.getElementById("myTable");
//         let newRow = tableRef.insertRow(1);
//         let newCell = newRow.insertCell(0);
//         let newText = document.createTextNode(filteredPeople[0].firstName);
//         newCell.appendChild(newText);
//     }
//     addRow(myTable);
// }
