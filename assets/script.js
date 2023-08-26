
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var password;
  var passwordprint;
  var checkUpercase;
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

    if (checkUpercase)


    console.log("password Print" );


   }

   function noPws () {

    console.log ("No data inputed");

  }
 
}

    // var password = passwordprint;
    // var passwordText = document.querySelector("#password");
  
    // passwordText.value = password;
  
  
  
   
  
  
  
  
  //////////---------------------------------------------------//////////////////////
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
