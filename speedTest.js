function speedTester(speed){
    const speedLimit = 70
    if (speed <= speedLimit) {
        console.log("Ok")
    }else{
        let difference = speed - speedLimit
        let demeritPoints = difference / 5 
      if (demeritPoints > 12) {
        console.log("License suspended")
      }else {
        console.log("Points: " + demeritPoints)
      }
       
    }
}