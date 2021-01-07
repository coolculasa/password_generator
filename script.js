/* user input for criteria  */
var inputPswdChars;
var includeNum;
var incluespChars;
var includeUpper;
var includeLower;

/* where password will be stored */
var password = "";

/* counter for password characters generated */
var passwordCtr;

/* list of numbers and characters */
var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var spCharList = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numList = "1234567890";
var upperCharList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCharList = "abcdefghijklmnopqrstuvwxyz";

var generate = document.querySelector("#generate");

// on mouse click on Generate Password, run function so that password will be displayed in text area
generate.addEventListener("click", function () {
    document.getElementById("password").value = generatePassword();
});

function generatePassword() {
  
  passwordCtr=0; //initialize to 0 and reset to 0 in case user generates another password

  // ask number of characters from user and store in a variable 
  inputPswdChars = parseInt(prompt("Choose between 8 and 128 characters for the password"));

  // validate input
  if (!inputPswdChars) { //if no value
    alert("This cannot be blank. Please click Generate Password again.");
  }

  else if (inputPswdChars < 8 || inputPswdChars > 128) {
      
      inputPswdChars = alert("Not within the range. Please click Generate Password again.");
  }
  
  else {
  // prompt for other criteria
      includeNum = confirm("Will the password include numbers?"); // Criteria 1
      includespChars = confirm("Will this include special characters?"); // Criteria 2
      includeUpper = confirm("Will this include uppercase letters?"); // Criteria 3
      includeLower = confirm("Will this include lowercase letters?"); // Critera 4

      // if user did not choose any criteria 
      if (!includeNum && !includespChars && !includeUpper && !includeLower) {
        alert("You must choose a criteria. Please click Generate Password again.");
      }

      else { //generate password characters based on length and critera chosen by user
        
        // if user selects all 4 criteria
        if (includeNum && includespChars && includeUpper && includeLower) {
          password = password + numList.charAt(Math.floor(Math.random() * Math.floor(numList.length - 1))); // Criteria 1
          passwordCtr ++;
          password = password + spCharList.charAt(Math.floor(Math.random() * Math.floor(spCharList.length - 1))); // Criteria 2
          passwordCtr ++;
          password = password + upperCharList.charAt(Math.floor(Math.random() * Math.floor(upperCharList.length - 1))); // Criteria 3
          passwordCtr ++;
          password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1))); // Criteria 4
          passwordCtr ++;
          console.log("all criteria selected");
        } //end if user selects all 4 Criteria
        
          // else if user has 1-3 criteria
          else { 
          // if user selects Criteria 1
          if (includeNum) {
          password = password + numList.charAt(Math.floor(Math.random() * Math.floor(numList.length - 1)));
          passwordCtr ++;

          console.log("criteria 1");
            //check to see if user selected from the other 3 criteria aside from Criteria 1
            if (includespChars){ //if user selected Criteria 1 and 2
              password = password + spCharList.charAt(Math.floor(Math.random() * Math.floor(spCharList.length - 1)));
              passwordCtr ++;
              console.log("Criteria 1 and 2");
          
              if (includeUpper){ //if user selected Criteria 1,2,and 3
                password = password + upperCharList.charAt(Math.floor(Math.random() * Math.floor(upperCharList.length - 1)));
                passwordCtr ++;
                console.log("Criteria 1,2,3");
              }
              
              if (includeLower){ //if user selected Criteria 1,2,and 4
                password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
                passwordCtr ++;
                console.log("Criteria 1,2,4");
              }
            }

          if (includeUpper){ //if user selected Criteria 1 and 3
            password = password + upperCharList.charAt(Math.floor(Math.random() * Math.floor(upperCharList.length - 1)));
            passwordCtr ++;
            console.log("Criteria 1 and 3");

            if (includeUpper){ //if user selected Criteria 1,3,and 4
              password = password + upperCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
              passwordCtr ++;
              console.log("Criteria 1,3,4");
            }
          }

          if (includeLower){ //if user selected Criteria 1 and 4
            password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
            passwordCtr ++;
            console.log("Criteria 1 and 4");
          }
        } //end if Criteria 1

      
        // if user selects Criteria 2
        if (includespChars) {
          password = password + spCharList.charAt(Math.floor(Math.random() * Math.floor(spCharList.length - 1)));
          passwordCtr ++;
          console.log("Criteria 2");

          //check to see if user selects from the other criteria aside from Criteria 2
          if (includeUpper){ //if user selects Criteria 2 and 3
            password = password + upperCharList.charAt(Math.floor(Math.random() * Math.floor(upperCharList.length - 1)));
            passwordCtr ++;
            console.log("Criteria 2,3");

            if (includeLower){ //if user selects Criteria 2,3, and 4
              password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
              passwordCtr ++;
              console.log("Criteria 2,3,4");
            }
          }

          if (includeLower){ //if user selects Criteria 2 and 4
            password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
            passwordCtr ++;
            console.log("Criteria 2,4");
          }
        } // end if Criteria 2

        // if user selects Criteria 3
        if (includeUpper) {
          password = password + upperCharList.charAt(Math.floor(Math.random() * Math.floor(upperCharList.length - 1)));
          passwordCtr ++;
          console.log("Criteria 3");

          //check to see if user selects from the other criteria aside from Criteria 3
          if (includeLower){ //if user selected Criteria 3 and 4
            password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
            passwordCtr ++;
            console.log("Criteria 3,4");
          }
        } // end if Criteria 3

        // if user selects Criteria 4
        if (includeLower) {
            password = password + lowerCharList.charAt(Math.floor(Math.random() * Math.floor(lowerCharList.length - 1)));
            passwordCtr ++;
            console.log("Criteria 4");
        } //end if Criteria 4
      } // end if user selects 1-3 criteria

        console.log("Total characters: " + passwordCtr);
        console.log("User input chars: " + inputPswdChars);

        //generate remaining characters

        for(var i = 0; i < (inputPswdChars-passwordCtr); i++)
        {
            password = password + charList.charAt(Math.floor(Math.random() * Math.floor(charList.length - 1)));      
        }

  

      } //end else statement      

  }

  return password;

}

// on mouse click on Copy to Clipboard, run function so that password will be copied to clipboard
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
  });

//function to copy password to clipboard
function copyPassword(){
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password has been copied to clipboard.");

}
