function validate() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile").value;
  let gender;

  var validity = {
    firstName: false,
    lastName: false,
    email: false,
    mobile: false,
    gender: false,
  };
  var letters = /^[a-zA-Z]*$/ ;

  if (firstName.length >= 3 && isNaN(lastName) && lastName.match(letters)) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
    validity.firstName = true;
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
  }

  var letters = /^[a-zA-Z]*$/ ;
  if (lastName.length >= 3  && isNaN(lastName) && lastName.match(letters)) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
    validity.lastName = true;
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
  }

  if (
    email.includes("@") &&
    email.includes(".") &&
    email.indexOf("@") != 0 &&
    email.length - email.lastIndexOf(".") >= 3
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
    validity.email = true;
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }
  let get_num = String(mobile).charAt(0);
  var firstIndex = Number(get_num);
  let mobileNumber = parseInt(mobile);
  if (mobile.length === 10 && !isNaN(mobileNumber) && firstIndex > 5) {
    document.getElementById("mobile-valid").style.display = "block";
    document.getElementById("mobile-invalid").style.display = "none";
    validity.mobile = true;
  } else {
    document.getElementById("mobile-invalid").style.display = "block";
    document.getElementById("mobile-valid").style.display = "none";
  }

  try {
    gender = document.querySelector('input[name="gender"]:checked').value;

    if (gender) {
      validity.gender = true;
      document.getElementById("gender-invalid").style.display = "none";
    }
  } catch (e) {
    document.getElementById("gender-invalid").style.display = "block";
  }

  if (
    validity.firstName &&
    validity.lastName &&
    validity.email &&
    validity.mobile
  ) {
    alert("Your details have been saved successfully!");
    setTimeout(() => {
      clear();
    }, 1000);
  }
}

function clear() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("country").value = "";

  document.getElementById("first-name-valid").style.display = "none";
  document.getElementById("last-name-valid").style.display = "none";
  document.getElementById("email-valid").style.display = "none";
  document.getElementById("mobile-valid").style.display = "none";
  document.getElementById("gender-invalid").style.display = "none";
}
/* 
     ZIP
    
    - Lenght = 6
      -All numbers

      // parseInt -- Returns number equivalent of string , if cannot - than returns NaN
      // isNaN--Returns true if value is NaN
      //isNaN--- It is a number 
    */

/*
  Email
  -Include @
  -Include .
  -Atleast one character before @
  -Atleast 2 characters after last .
  */
/*
 Includes - Returns true if the string contains that charcater/substring , returns false if not
 Indexof- Returns index of first occurence of that cahracter/substring , else returns -1
 */
/*
m@gmail.com
Index of . : 7
length of email : 10


m@gmail.com 
Index of . : 7
length of email: 11
*/
