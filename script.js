function showMessage()
{
    alert("Welcome to ITI Institute Website");
}

function validateForm()
{
    let name = document.getElementById("name").value;

    if(name=="")
    {
        alert("Please Enter Name");
        return false;
    }

    alert("Form Submitted Successfully");
    return true;
}