console.log("connected")
 
 // paratmeter is someDoor
function chooseDoor(someDoor){

// if statement = if someDoor is equal to door1 then alert cookie. If not the the next else if statement will be run to see if its true
  if(someDoor === "door1"){
    alert('cookie');
  }
 
 // if statement = if someDoor is equal to door2 then alert banana. If not the the next else if statement will be run to see if its true
  else if(someDoor === "door2"){
    alert('banana');
  }
// if statement = if someDoor is equal to door3 then alert candy. If not the the next else if statement will be run to see if its true
  else if(someDoor === "door3"){
    alert('candy');
  }
// if no "if" statment is tru then wrong door is the alert
  else {
    alert('wrong door');
  }
  console.log('someDoor: ', someDoor);
}

chooseDoor("door1");
chooseDoor("door2");
chooseDoor("door3");
chooseDoor("door4");




