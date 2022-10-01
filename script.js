const checkingData = () => {
  let error = false;
  let fName = document.getElementById("firstName").value;
  let lName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let psw = document.getElementById("password").value;
  let confirmPsw = document.getElementById("confirm-password").value;
  let check = document.getElementById("invalidCheck").checked;
  console.log(fName, lName, email, psw, confirmPsw, check);

  if (fName.length >= 3) {
    document.getElementById("fName-valid-msg").style.display = "block";
    document.getElementById("fName-invalid-msg").style.display = "none";
  } else {
    document.getElementById("fName-valid-msg").style.display = "none";
    document.getElementById("fName-invalid-msg").style.display = "block";
    error = true;
  }

  if (lName.length >= 3) {
    document.getElementById("sName-valid-msg").style.display = "block";
    document.getElementById("sName-invalid-msg").style.display = "none";
  } else {
    document.getElementById("sName-valid-msg").style.display = "none";
    document.getElementById("sName-invalid-msg").style.display = "block";
    error = true;
  }
  const regx = /^([a-zA-Z0-9])+@(gmail)+.(com)+$/;
  if (email.match(regx) && email.indexOf("@") > 1) {
    document.getElementById("email-valid-msg").style.display = "block";
    document.getElementById("email-invalid-msg").style.display = "none";
  } else {
    document.getElementById("email-valid-msg").style.display = "none";
    document.getElementById("email-invalid-msg").style.display = "block";
    error = true;
  }

  if (psw.length >= 8) {
    document.getElementById("password-valid-msg").style.display = "block";
    document.getElementById("password-invalid-msg").style.display = "none";
  } else {
    document.getElementById("password-valid-msg").style.display = "none";
    document.getElementById("password-invalid-msg").style.display = "block";
    error = true;
  }

  if (confirmPsw === psw && confirmPsw.length >= 8) {
    document.getElementById("psw-check-valid-msg").style.display = "block";
    document.getElementById("psw-check-invalid-msg").style.display = "none";
  } else {
    document.getElementById("psw-check-valid-msg").style.display = "none";
    document.getElementById("psw-check-invalid-msg").style.display = "block";
    error = true;
  }
  if (check !== true) {
    document.getElementById("ch-invalid-msg").style.display = "block";
    error = true;
  } else {
    document.getElementById("ch-invalid-msg").style.display = "none";
  }

  setTimeout(() => {
    if (error === false) {
      alert("Your details save been saved successfully!");
      document.getElementById("firstName").value='';
      document.getElementById("lastName").value='';
      document.getElementById("email").value='';
      document.getElementById("password").value='';
      document.getElementById("confirm-password").value='';
      document.getElementById("invalidCheck").checked=false;

      document.getElementById("fName-valid-msg").style.display = "none";
      document.getElementById("sName-valid-msg").style.display = "none";
      document.getElementById("email-valid-msg").style.display = "none";
      document.getElementById("password-valid-msg").style.display = "none";
      document.getElementById("psw-check-valid-msg").style.display = "none";
    }
  }, 1000);
};
