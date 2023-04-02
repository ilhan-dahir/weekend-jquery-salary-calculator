$(document).ready(onReady);

function onReady(){
    $('.submit-button').on('click',addEmployee);
}

//Add employees 
function addEmployee(){
    event.preventDefault();
    console.log('add employee');
    readFirstName = $('#firstName').val();
    readLastName = $('#lastName').val();
    readId = $('#id').val();
    readTitle = $('#title').val();
    readSalary = $('#salary').val();

}