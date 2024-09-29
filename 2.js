//This function calculates the marks and gives out the corresponding grade
function grade(marks) {
    if (marks > 100 || marks < 0) {
      console.log("Invalid Score");
    return "Invalid Score"
    }
    if (marks >= 80 && marks <= 100) {
      return "you got an A";
    } else if (marks >= 60 && marks <= 79) {
      return "you got a B";
    } else if (marks >= 49 && marks <= 59) {
      return "you got a C";
    } else if (marks >= 40 && marks <= 49) {
      return "You got a D";
    } else if (marks < 40) {
      return "you got a E";
    }
  }
  //constant to show the maximum marks attainable
  const marks = 100;
  
  //
  console.log(grade(10))