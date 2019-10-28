
// A $( document ).ready() block.
$(document).ready(function() {
    var queryDict = {};
    location.search.substr(1).split("&").forEach(function(item){queryDict[item.split("=")[0]] = item.split("=")[1]}); 

    var name = queryDict['name'];
    var email = queryDict['email'];
    if (name != null) {
        $('#form-username').val(name); 
        // document.getElementById('form-username').val
        // it has the key email then set the value to the email html field
    } 
    if (email != null) {
        $('#form-email').val(email);
    }
    // if it has the name then set the value to the name html field
    
    // console.log("ready!");
});



