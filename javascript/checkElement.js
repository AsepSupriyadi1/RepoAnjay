//  CHECKING THE MAIN CONTENT IN THE PROFILE
//  IF the content is null change the right side to 100%

var leftSide = document.querySelector("#left-side");
var rightSide = document.querySelector("#right-side");

var containContents = leftSide.classList.contains("d-none");


if(containContents){
    rightSide.classList.replace("col-lg-4", "col-lg-12");
}