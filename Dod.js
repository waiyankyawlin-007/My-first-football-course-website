
// For Tab Button Validation and Blank Error Massage
function BlankError(Error_id, Error_text) {
    var x = document.getElementById(Error_id).value;
    if (x == "") {
        document.getElementById(Error_text).innerHTML = "Please Fill This Field";
    } else {
        document.getElementById(Error_text).innerHTML = "";
    }
}
// For Alphabat Text error Massage 
function Check_A(event, err) {
    if (!((event.which >= 65 && event.which <= 90) || (event.which >= 97 && event.which <= 122) || event.which == 0 || event.which == 8)) {
        document.getElementById(err).innerHTML = "invalid name format";
        return false;
    }
    // For Email error Massage (@ , .)
    function Check_Email() {
        var m = document.getElementById("Email").value;
        if (m == "") {
            document.getElementById("email-er").innerHTML = "Please Fill Email Address ";
        } else {
        var e = document.getElementById("Email").value;
            var atpos = e.indexOf("@");
            var dotpos = e.lastIndexOf(".");
            if (atpos < 4 || dotpos < atpos + 3) {
                document.getElementById("email-er").innerHTML = "Invalid email address";
                se {
                document.getElementById("email-er").innerHTML = "";   
}
    // Clear Form (Value & Error masssage )
    function myFunction() {
        location.reload();
    // Phone number Valitation 
    document.getElementById('phone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});