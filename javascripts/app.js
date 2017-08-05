var rover = {
  direction: "N",
  positionx: 0,
  positiony: 0,
  travelLog: [],
  obstacles: [
    [" ", " ", "O", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "O", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", "O", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", "O", " ", " ", " ", " "],
    [" ", " ", "O ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", "O", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", "O", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
  ],
};

function turnLeft(){

  switch (rover.direction){
    case "N":
        console.log("W");
        rover.direction = "W";
      break;

    case "S":
        console.log("E");
        rover.direction = "E";
      break;

    case "E":
        console.log("N");
        rover.direction = "N";
      break;

    case "W":
        console.log("S");
        rover.direction = "S";
      break;

    default: console.log("Mars Rover no funciona");

  }
}


function turnRight(){

  switch (rover.direction){
    case "N":
        console.log("E");
        rover.direction = "E";
      break;

    case "S":
        console.log("W");
        rover.direction = "W";
      break;

    case "E":
        console.log("S");
        rover.direction = "S";
      break;

    case "W":
        console.log("N");
        rover.direction = "N";
      break;

    default: console.log("Mars Rover no funciona");

  }
}


function moveForward(){

  switch (rover.direction){
    case "N":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10) && (rover.obstacles[rover.positiony-1][rover.positionx] != "O")) {
        rover.positiony = rover.positiony - 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + "; ";
        console.log(rover.positionx, rover.positiony);
      }
      else{
        console.log("hay un obstaculo");
      }
      break;

    case "S":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10) && (rover.obstacles[rover.positiony+1][rover.positionx] != "O")) {
        rover.positiony = rover.positiony + 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + "; ";
        console.log(rover.positionx, rover.positiony);
      }
      else{
        console.log("hay un obstaculo");
      }

      break;

    case "E":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10) && (rover.obstacles[rover.positiony][rover.positionx+1] != "O")) {
        rover.positionx = rover.positionx + 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + ";";
        console.log(rover.positionx, rover.positiony);
      }
      else{
        console.log("hay un obstaculo");
      }

      break;

    case "W":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10) && (rover.obstacles[rover.positiony][rover.positionx-1] != "O")) {
        rover.positionx = rover.positionx - 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + ";";
        console.log(rover.positionx, rover.positiony);
      }
      else{
        console.log("hay un obstaculo");
      }

      break;

    default: console.log("Mars Rover no funciona");

  }
}

function moveBackward(){

  switch (rover.direction){
    case "N":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10)) {
        rover.positiony = rover.positiony + 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + "; ";
        console.log(rover.positionx, rover.positiony);
        pasar = obstaculos(rover.positiony,rover.positionx);
        console.log(pasar);
      }
      break;

    case "S":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10)) {
        rover.positiony = rover.positiony - 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + "; ";
        console.log(rover.positionx, rover.positiony);
      }

      break;

    case "E":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10)) {
        rover.positionx = rover.positionx - 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + ";";
        console.log(rover.positionx, rover.positiony);
      }

      break;

    case "W":

      if ((rover.positiony >= 0 && rover.positiony <= 10) && (rover.positionx >= 0 && rover.positionx <= 10)) {
        rover.positionx = rover.positionx + 1;
        rover.travelLog += rover.positionx + "," + rover.positiony + ";";
        console.log(rover.positionx, rover.positiony);
      }

      break;

    default: console.log("Mars Rover no funciona");

  }
}

function iteration(){
  var arrayCommands = ["r","f","f", "z", "z","r","f","f","l","f","r","f","f"];
  for (var w = 0; w < arrayCommands.length; w++) {
    if (arrayCommands[w] === "r") {
      turnRight();
    }
    if (arrayCommands[w] === "f") {
      moveForward();
    }
    if (arrayCommands[w] === "l") {
      turnLeft();
    }
    if (arrayCommands[w] === "z") {
      moveBackward();
    }
  }
  console.log(rover.travelLog);
}
