/* List of Characters */

/* Special characters */

spChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

/* Numeric characters */
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Alphabetical characters */
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function generatePassword() {
  // ask number of characters from user and store in a variable 
  var inputPswd = parseInt(prompt("Choose from 8 to 128 characters for the password"));

  // validate input
  
  //if no value
  if (!inputPswd) {
      alert("This needs a value");
  } else if (inputPswd < 8 || inputPswd > 128) {
      
      inputPswd = parseInt(prompt("Choose the passwod length: between 8 and 128"));

  } else {
      // prompt for other criteria

  };
}
