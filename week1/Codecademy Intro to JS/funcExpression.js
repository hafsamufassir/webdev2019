// FUNCTION EXPRESSION
const plantNeedsWater = function(day){
    if(day === "Wednesday"){
      return true;
    }else{
      return false;
    }
  }
  
  plantNeedsWater("Tuesday");
  
  console.log(plantNeedsWater('Tuesday'));

  /* ARROW FUNCTION
  
  const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

const exampleName = exampleParameter => {

};


  */

  /* 
  CONCISE BODY FUNCTION
  
  const plantNeedsWater = day => day === 'Wednesday' ? true : false;

  const squareNum = (num) => {
  return num * num;
}; 

ИМЕЕТ ТАКОЙ ВИД:

const squareNum = num => num * num;

  */