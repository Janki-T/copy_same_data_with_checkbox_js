
//we creat funaction to copy data with funcation name copy_data() 
function copy_data() {

    //here we get value of button where we provide onclick event
    // it is check-box so we do not use "VALUE" we used "checked"
    let checkbox = document.getElementById('chech_box').checked;

    //here we get value from every input to copy 
    let firstName = document.getElementById('f_name').value;
    let lastName = document.getElementById('l_name').value;
    let email = document.getElementById('email').value;
    let phone_number = document.getElementById('phone_n').value;
    let city = document.getElementById('city').value;

    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(phone_number);
    // console.log(city);

    //here we get input to set data
    let copy_firstName = document.getElementById('copy_f_name');
    let copy_lastName = document.getElementById('copy_l_name');
    let copy_email = document.getElementById('copy_email');
    let copy_phone_number = document.getElementById('copy_phone_n');
    let copy_city = document.getElementById('copy_city');


    //here we use if to copy value if checkbox is checked 
    if (checkbox) {
        // alert("you checked")
        copy_firstName.value = firstName;
        copy_firstName.disabled = true;

        copy_lastName.value = lastName;
        copy_lastName.disabled = true;

        copy_email.value = email;
        copy_email.disabled = true;

        copy_phone_number.value = phone_number;
        copy_phone_number.disabled = true;

        copy_city.value = city;
        copy_city.disabled = true;

    }

    // here we use else to remove value if checkbox is unchecked
    else {
        // alert('you unchecked')
        document.getElementById('copy_f_name').value = "";
        copy_firstName.disabled = false;
        document.getElementById('copy_l_name').value = "";
        copy_lastName.disabled = false;
        document.getElementById('copy_email').value = "";
        copy_email.disabled = false;
        document.getElementById('copy_phone_n').value = "";
        copy_phone_number.disabled = false;
        document.getElementById('copy_city').value = "";
        copy_city.disabled = false;
    }

}