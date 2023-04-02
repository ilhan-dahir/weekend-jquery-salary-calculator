$(document).ready(onReady);

function onReady(){
    $('.submit-button').on('click',addEmployee);
}

//Add employees 
function addEmployee(){
    event.preventDefault();
   
    //set input values
    readFirstName = $('#firstName').val();
    readLastName = $('#lastName').val();
    readId = $('#id').val();
    readTitle = $('#title').val();
    readSalary = $('#salary').val();
    
    //add to table 
    $('tbody').append(`
    <tr id="table-row">
    <td>${readFirstName}</td>
    <td>${readLastName}</td>
    <td>${readId}</td>
    <td>${readTitle}</td>
    <td>${readSalary}</td>
    `);
    
    //reset values to blank
    $('#firstName').val("");
    $('#lastName').val("");
    $('#id').val("");
    $('#title').val("");
    $('#salary').val("");
    
}