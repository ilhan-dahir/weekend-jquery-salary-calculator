$(document).ready(onReady);

function onReady(){
    $('.submit-button').on('click',addEmployee);
    $('tbody').on('click', '#delete-button', deleteThis);
}
//delete employee
function deleteThis(){
    $(this).parent().parent().remove();
    //updateTotal();
}

let totalSalary = 0;
let totalMonthlySalary = 0;

//Add employees 
function addEmployee(){
    event.preventDefault();
   
    //set input values
    let readFirstName = $('#firstName').val();
    let readLastName = $('#lastName').val();
    let readId = $('#id').val();
    let readTitle = $('#title').val();
    let readSalary = $('#salary').val();
    
    //add to table 
    $('tbody').append(`
    <tr id="table-row">
    <td>${readFirstName}</td>
    <td>${readLastName}</td>
    <td>${readId}</td>
    <td>${readTitle}</td>
    <td>${readSalary}</td>
    <td><button id = "delete-button">Delete</button></td>
    `);

    //calculate total salary
    totalSalary += Number($('#salary').val());
    totalMonthlySalary = totalSalary / 12;

    //if we have an imput for Salary, then display output
    if(totalSalary > 0){
    $('#totalSalary').text(`Total Monthly Salary: ${totalMonthlySalary}`);
    }
    //reset values to blank
    $('#firstName').val("");
    $('#lastName').val("");
    $('#id').val("");
    $('#title').val("");
    $('#salary').val("");
}

// function updateTotal(){
//     console.log('in ut', totalSalary);
//     totalSalary -= Number($('#salary').val());
//     console.log('in ut', totalSalary);


// }
