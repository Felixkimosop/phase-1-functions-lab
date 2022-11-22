// Code your solution in this file!
function distanceFromHqInBlocks (clientDistance) {
    
    if (clientDistance<42){
      return(42-clientDistance);
    }
    else {
  
    return(clientDistance-42);
  }
  }

  function distanceFromHqInFeet (clientDistance) {
    return distanceFromHqInBlocks(clientDistance)*264;
    
  }
  
  function distanceTravelledInFeet(x,y){
    if (y>x){
      return((y-x)*264);
    }
    else
      return((x-y)*264);
  }

  function calculatesFarePrice(start,end){
    let distance = distanceTravelledInFeet(start,end);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }


