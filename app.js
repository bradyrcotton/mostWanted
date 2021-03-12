'use strict';

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    
    
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    let filteredPeople = people.filter(function (person) {
        if( person.lastName === lastNameInput && person.firstName === firstNameInput){
            return true;
        }
        else{
        return false;}
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
    /// TRY EMPTY BOX TO 'collect' the elements
    function addRow(){
        let tableRef = document.getElementById("myTable");
        let tableRow1 = tableRef.insertRow(1);
        let newCell1 = tableRow1.insertCell(0);
        let newCell2 = tableRow1.insertCell(1);
        let newCell3 = tableRow1.insertCell(2);
        let newCell4 = tableRow1.insertCell(3);
        let newCell5 = tableRow1.insertCell(4);
        let firstNames = document.createTextNode(filteredPeople[0].firstName);
        let lastNames =document.createTextNode(filteredPeople[0].lastName);
        let personAge = document.createTextNode(filteredPeople[0].age);
        let personHeight =document.createTextNode(filteredPeople[0].height);
        let personWeight =document.createTextNode(filteredPeople[0].weight)
        newCell1.appendChild(firstNames);
        newCell2.appendChild(lastNames);
        newCell3.appendChild(personAge);
        newCell4.appendChild(personHeight);
        newCell5.appendChild(personWeight);
    }
    addRow();
}


//     function addRows(){
//         let tableRef = document.getElementById("myTable");
//         let tableRow1 = tableRef.insertRow(i+1);
//         let newCell1 = tableRow1.insertCell(0);
//         let newCell2 = tableRow1.insertCell(1);
//         let newCell3 = tableRow1.insertCell(2);
//         let newCell4 = tableRow1.insertCell(3);
//         let newCell5 = tableRow1.insertCell(4);
//         let firstNames = document.createTextNode(filteredPeople[i].firstName);
//         let lastNames =document.createTextNode(filteredPeople[i].lastName);
//         let personAge = document.createTextNode(filteredPeople[i].age);
//         let personHeight =document.createTextNode(filteredPeople[i].height);
//         let personWeight =document.createTextNode(filteredPeople[i].weight);
//         newCell1.appendChild(firstNames);
//         newCell2.appendChild(lastNames);
//         newCell3.appendChild(personAge);
//         newCell4.appendChild(personHeight);
//         newCell5.appendChild(personWeight);

// }
// for (let i=0; i<filteredPeople[i]; i++){
//         addRows();
// }