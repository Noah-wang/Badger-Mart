
function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!
   
    // TODO: Alert the user of the job that they applied for!
    var jobRadios = document.getElementsByName('job');
    var jobSelected = false;
    var selectedJob = '';

    // Iterate through the radio buttons to check which one is selected
    for(var i = 0; i < jobRadios.length; i++) {
        if(jobRadios[i].checked) {
            jobSelected = true;
            selectedJob = jobRadios[i].value; // The value of the selected radio button
            break; // Exit the loop once the selected job is found
        }
    }

    // Alert the user based on whether a job was selected
    if(jobSelected) {
        alert("Thank you for applying to be a " + selectedJob + "!");
    } else {
        alert("Please select a job!");
    }
}
