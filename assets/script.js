
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var password = "";
  var passwordprint;
  var checkUpercase;
  var checkLowercase;
  var checkSpChars;
  var checkNumbers;
  var counter = 0;

 
  alert ("Hello! The password has to be between 8  and 120 characters!");
  var pwLength = prompt("What should be the length of password ");

  if ((pwLength != "" ) || (pwLength != Null)) {
   
      if ((pwLength < 8) || (pwLength > 120)) {
        for (var y = 0; y < 4; ((pwLength >= 8) && (pwLength <= 120)) ) { 
          alert ("The password has to be between above 8  and less than 120 characters!");
          pwLength = prompt("What should be the length of password ");
           y++
           counter ++;
          }
      }else if (counter >= 4){
        noPws(); // Type the Value for the Password to be printed
      }
      
      if((pwLength >= 8) && (pwLength <= 120)) {

        checkUpercase = confirm("Do you want uppercase letters in your password ?");
        checkLowercase = confirm("Do you want lowercase letters in your password ?");
        checkSpChars = confirm("Do you want special characters in your password ?");
        checkNumbers = confirm("Do you want numbers in your password ?");
        passwordprint();
                
      } else {

        noPws(); // Type the Value for the Password to be printed
      }
    
   } 

 function passwordprint () {

    var pwUpercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwLowercase = pwUpercase.toLocaleLowerCase();
    var pwNumbers = "1234567890"
    var pwSpchars = "!@#$%^&*()_+=-`~<>/?;:\|][{}";
    var conPwsstring;
    var pwsString
    var ranPws;

    function Password_Generator (pwsString) {
      for (var i = 0; i < pwLength; i++){
        ranPws = Math.floor(Math.random() * pwsString.length);
        password += pwsString.substring(ranPws, ranPws +1);
       
      }
      console.log(password)
    }

    if ((checkUpercase) && (checkLowercase) && (checkSpChars) && (checkNumbers)) {

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
      noCombination();
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

    }else if ((checkUpercase) && (checkLowercase) && (!checkSpChars) && (!checkNumbers)) {

      conPwsstring = pwUpercase.concat(pwLowercase);
      Password_Generator(conPwsstring);
    }
  }

   function noCombination () {
    console.log ("No data inputed");
    passwordprint();
   }


    var password = passwordprint;
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;

    return; 

  
  }


    // var password = passwordprint;
    // var passwordText = document.querySelector("#password");
  
    // passwordText.value = password;
  
  
  
   
  
  
  
  
  
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
