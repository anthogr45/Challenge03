
// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input

function writePassword() {

  var password = "";
  var passwordprint;
  var checkUpercase;
  var checkLowercase;
  var checkSpChars;
  var checkNumbers;
  var counter1 = 0;
 

  //  passwordText.value = "";

 
  alert ("Hello! The password has to be between 8 and 128 characters!");
  var pwLength = prompt("What should be the length of password ");

  if ((pwLength != "" ) || (pwLength != Null)) { //Password given length validation
    
      if ((pwLength < 8) || (pwLength > 128)) {
        alert ("The password has to be between 8 and 128 characters!")
        counter1 = 2;
        noPws ();

      }else if((pwLength >= 8) && (pwLength <= 128)) {  //Password Criteria Validation
 
        checkUpercase = confirm("Do you want uppercase letters in your password ?");
        checkLowercase = confirm("Do you want lowercase letters in your password ?");
        checkSpChars = confirm("Do you want special characters in your password ?");
        checkNumbers = confirm("Do you want numbers in your password ?");

      } 
      
      if((checkUpercase) || (checkLowercase) || (checkSpChars) || (checkNumbers)) {
        passwordprint();
        
      }        
      else {
        noPws(); 
      }

       function noPws () {
        if(counter1 === 2)  {
          password = "Password length not valid."
        }else {
          alert("At least one password criteria is required!")
          password = "Password conditions not given."
        }
      }
    
   } 

 function passwordprint () {

    var pwUpercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwLowercase = "abcdefghijklmnopqrstuvwzyz";
    var pwNumbers = "1234567890"
    var pwSpchars = "!@#$%^&*()_+=-`~<>/?;:\|][{}";
    var conPwsstring;
    var pwsString
    var ranPws;

    function Password_Generator (pwsString) { //Password is generated  based on the selected criteria. i.e pwsString contains the string for the given criterias.
      for (var i = 0; i < pwLength; i++){
        ranPws = Math.floor(Math.random() * pwsString.length); //Research online and decided to use the Math method for random selection of charactors from the string
        password += pwsString.substring(ranPws, ranPws +1);
               
      }
      
    }

    if ((checkUpercase) && (checkLowercase) && (checkSpChars) && (checkNumbers)) { //Conditions for the password criteria to generate the string of given combinations (I.E. Uppercase, Lower, Numbers etc..)

      conPwsstring = pwUpercase.concat(pwLowercase, pwNumbers, pwSpchars);
      Password_Generator(conPwsstring);

    }else if ((!checkUpercase) && (checkLowercase) && (checkSpChars) && (checkNumbers)) {

      conPwsstring = pwNumbers.concat(pwLowercase, pwSpchars);
      Password_Generator(conPwsstring);
    }

    if((!checkUpercase) && (!checkLowercase) && (!checkSpChars) && (checkNumbers)) {

      conPwsstring = pwNumbers;
      Password_Generator(conPwsstring);
    }else if ((!checkUpercase) && (!checkLowercase) && (!checkSpChars) && (!checkNumbers)) {
      alert("The password has to be atleast of one combination type")
      checkUpercase = confirm("Do you want uppercase letters in your password ?");
      checkLowercase = confirm("Do you want lowercase letters in your password ?");
      checkSpChars = confirm("Do you want special characters in your password ?");
      checkNumbers = confirm("Do you want numbers in your password ?");
      
    }

    if ((checkUpercase) && (checkLowercase) && (!checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwLowercase);
      Password_Generator(conPwsstring);
    }else if ((checkUpercase) && (checkLowercase) &&  (!checkSpChars) && (checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwLowercase, pwNumbers);
      Password_Generator(conPwsstring);
    }

    if ((checkUpercase) && (checkLowercase) &&  (checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwLowercase, pwSpchars);
      Password_Generator(conPwsstring);
    }else if ((!checkUpercase) && (checkLowercase) &&  (checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwLowercase.concat(pwSpchars);
      Password_Generator(conPwsstring);
    }
    
    if ((!checkUpercase) && (!checkLowercase) && (checkSpChars) && (checkNumbers)) {

      conPwsstring = pwSpchars.concat(pwNumbers);
      Password_Generator(conPwsstring);
    }else if ((checkUpercase) && (!checkLowercase) && (!checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwUpercase;
      Password_Generator(conPwsstring);
    }

    if ((checkUpercase) && (!checkLowercase) && (checkSpChars) && (checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwNumbers, pwSpchars);
      Password_Generator(conPwsstring);
    }else if ((checkUpercase) && (!checkLowercase) && (!checkSpChars) && (checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwNumbers);
      Password_Generator(conPwsstring);
    }

    if ((checkUpercase) && (!checkLowercase) && (!checkSpChars) && (checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwNumbers);
      Password_Generator(conPwsstring);
    }else if ((!checkUpercase) && (checkLowercase) && (!checkSpChars) && (checkNumbers)) {
      conPwsstring = pwLowercase.concat(pwNumbers);
      Password_Generator(conPwsstring);
     }

     if ((!checkUpercase) && (checkLowercase) && (!checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwLowercase;
      Password_Generator(conPwsstring);
    }else if ((!checkUpercase) && (!checkLowercase) && (checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwSpchars;
      Password_Generator(conPwsstring);
     }
    if ((checkUpercase) && (!checkLowercase) && (checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwSpchars);
      Password_Generator(conPwsstring);
    }else if ((checkUpercase) && (checkLowercase) && (!checkSpChars) && (!checkNumbers)) {
      conPwsstring = pwUpercase.concat(pwLowercase);
      Password_Generator(conPwsstring);
    }
    if ((!checkUpercase) && (!checkLowercase) && (!checkSpChars) && (checkNumbers)) {

      conPwsstring = pwNumbers;
      Password_Generator(conPwsstring);
    }else if ((!checkUpercase) && (!checkLowercase) && (!checkSpChars) && (!checkNumbers)) {
      noPws ();
    }

  }

    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

    return; 
  }
  
// generateBtn.addEventListener("click", writePassword);
