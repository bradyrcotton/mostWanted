'use strict';
function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let continueLoopPeople = true;
    let filteredPeople = people.filter(function (person) {
        while(person.firstName === firstNameInput && person.lastName === lastNameInput){
            return true;
        }
        if(person.firstName === firstNameInput || person.lastName === lastNameInput){
            return true;
        }
        else{ return false;}
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
        let newCell6 = tableRow1.insertCell(5);
        let newCell7 = tableRow1.insertCell(6);
        let newCell8 = tableRow1.insertCell(7);
        let newCell9 = tableRow1.insertCell(8);
        let newCell10 = tableRow1.insertCell(9);
        let peopleId = document.createTextNode(filteredPeople[i].id);
        let firstNames = document.createTextNode(filteredPeople[i].firstName);
        let lastNames =document.createTextNode(filteredPeople[i].lastName);
        let personGender = document.createTextNode(filteredPeople[i].gender);
        let personAge = document.createTextNode(filteredPeople[i].dob);
        let personHeight =document.createTextNode(filteredPeople[i].height);
        let personWeight =document.createTextNode(filteredPeople[i].weight);
        let personEyeColor =document.createTextNode(filteredPeople[i].eyeColor);
        let personParent =document.createTextNode(filteredPeople[i].parents);
        let spouse =document.createTextNode(filteredPeople[i].currentSpouse);
        newCell1.appendChild(peopleId);
        newCell2.appendChild(firstNames);
        newCell3.appendChild(lastNames);
        newCell4.appendChild(personGender);
        newCell5.appendChild(personAge);
        newCell6.appendChild(personHeight);
        newCell7.appendChild(personWeight);
        newCell8.appendChild(personEyeColor);
        newCell9.appendChild(personParent);
        newCell10.appendChild(spouse);
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