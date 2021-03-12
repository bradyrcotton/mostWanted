'use strict';

    function addRow(){
        
        for (let i=0; i<people.length; i++){
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
        let peopleId = document.createTextNode(people[i].id);
        let firstNames = document.createTextNode(people[i].firstName);
        let lastNames =document.createTextNode(people[i].lastName);
        let personGender = document.createTextNode(people[i].gender);
        let personAge = document.createTextNode(people[i].dob);
        let personHeight =document.createTextNode(people[i].height);
        let personWeight =document.createTextNode(people[i].weight);
        let personEyeColor =document.createTextNode(people[i].eyeColor);
        let personParent =document.createTextNode(people[i].parents);
        let spouse =document.createTextNode(people[i].currentSpouse);
        
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

function searchByName(){
    // Grabbing the values from our nameForm form and inputs.
    let idInput = document.forms['nameForm']['peopleId'].value
    let firstNameInput = document.forms['nameForm']['fname'].value;
    let lastNameInput = document.forms['nameForm']['lname'].value;
    let genderInput = document.forms['nameForm']['gender'].value;
    let ageInput = document.forms['nameForm']['age'].value;
    let heightInput = document.forms['nameForm']['height'].value;
    let weightInput = document.forms['nameForm']['weight'].value;
    let eyeColorInput = document.forms['nameForm']['eyeColor'].value;
    
    // "people" is coming from the data.js file. We have access to it within this JavaScript file.
    
    let filteredPeople = people.filter(function (person) {
        while(person.id === idInput && person.firstName === firstNameInput && person.lastName === lastNameInput && person.gender === genderInput && person.dob === ageInput && person.height === heightInput && person.weight === weightInput && person.eyeColor === eyeColorInput){
            return true;
        }
        if(person.id === idInput || person.firstName === firstNameInput || person.lastName === lastNameInput || person.gender === genderInput || person.dob === ageInput || person.height === heightInput || person.weight === weightInput || person.eyeColor === eyeColorInput){
            return true;
        }
        else{ return false;}
    });

//     function deleteRows(){
//         if
//     }
// }
    // for(let i=0;i < filteredPeople.length;i++){
    //     if (tableRef[i] != filteredPeople[i]){

        
    //     document.getElementById("myTable").deleteRow(i);
    //     }
    // }
   function replaceTable(){
       for(let i=0;i<people.length ;i++){
        
        document.getElementById("myTable").deleteRow(1);
       }
    function addNewRow(){
     
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
addNewRow();
}
replaceTable();
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