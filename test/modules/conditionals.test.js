describe("conditionals.js", () => {
   describe("largerNum Function", () => {
      it("Returns the larger number", () => {
         chai.assert.strictEqual(largerNum(10, 4), 10, "Be sure to return the larger of the two numbers")
         chai.assert.strictEqual(largerNum(18, 20), 20, "Be sure to return the larger of the two numbeers")

      })
   })
   describe("testGrader Function", () => {
      it("returns a string", () => {
         chai.assert.isString(testGrader(23, 25), "Return type must be a string.")
      })
      it("returns the correct letter grade", () => {
         chai.assert.strictEqual(testGrader(23, 25).toUpperCase(), "A", "Return can only be either 'A', 'B', 'C', 'D', 'F'.")
      })
      it("letter grade is case sensitive", () => {
         chai.assert.strictEqual(testGrader(19, 25), "C", "Letter grade must be capitalized.")
      })
   })
   describe("timeOfDayGreeting", () => {
      it("Function should return a string", () => {
         chai.assert.isString(timeOfDayGreeting(5), "Be sure to return a greeting")
      })
      it("Function should return Good Morning during the morning hours", () => {
         chai.assert.isTrue(timeOfDayGreeting(5) == "Good Morning" && timeOfDayGreeting(11) == "Good Morning" && timeOfDayGreeting(7) == "Good Morning", "Be sure to return 'Good Morning' between (and including) the hours 5 and 11")
      })
      it("Function should return Good Afternoon during afternoon hours", () => {
         chai.assert.isTrue(timeOfDayGreeting(13) == "Good Afternoon" && timeOfDayGreeting(12) == "Good Afternoon" && timeOfDayGreeting(17) == "Good Afternoon", "Be sure to return 'Good Afternoon' between (and including) the hours 12 and 17")
      })
      it("Function should return Good Evening for evening hours", () => {
         chai.assert.isTrue(timeOfDayGreeting(18) == "Good Evening" && timeOfDayGreeting(20) == "Good Evening" && timeOfDayGreeting(21) == "Good Evening", "Be sure to return 'Good Evening' between the hours of 22 - 24 and 1 - 4")
      })
      it("Function should return Good Night for nightime hours between 22 and 24", () => {
         chai.assert.isTrue(timeOfDayGreeting(22) == "Good Night" && timeOfDayGreeting(23) == "Good Night" && timeOfDayGreeting(24) == "Good Night", "Be sure to return 'Good Night' between (and including) the hours 22 and 24")
      })
      it("Function should return Good Night for nighttime hours between 1 and 4", () => {
         chai.assert.isTrue(timeOfDayGreeting(1) == "Good Night" && timeOfDayGreeting(3) == "Good Night" && timeOfDayGreeting(4) == "Good Night", "Be sure to return 'Good Night' between (and including) the hours 1 and 4")
      })

   })
   describe("fever Function", () => {
      it("Should return a string", () => {
         chai.assert.isString(fever(98), "Be sure to return a string")
      })
      it("Should return 'no fever' if temp is under or equal to 98.6", () => {
         chai.assert.isTrue(fever(98) == "no fever", "Be sure to return 'no fever' is temp is below 98.6")
         chai.assert.isTrue(fever(75) == "no fever")
         chai.assert.isTrue(fever(98.6) == "no fever", "Be sure to return 'no fever' if temp is equal to 98.6")
      })
      it("Should return 'fever' if temp is above 98.6", () => {
         chai.assert.isTrue(fever(98.7) == "fever", "Be sure to return 'fever' if the temp is above 98.6")
         chai.assert.isTrue(fever(101) == "fever", "Be sure to return 'fever' if temp is above 98.6")
      })
      it("Should return 'fever go to hospital'", () => {
         chai.assert.isTrue(fever(103) == "fever go to hospital", "Be sure to return 'fever go to hospital' if temp is at or above 103")
         chai.assert.isTrue(fever(110) == 'fever go to hospital', "Be sure to return 'fever go to hospital' if temp is at or above 103")
      })
   })
   describe("isStopped Function", () => {
      let movingCar = {
         moving: true
      }
      let stoppedCar = {
         moving: false
      }
      it("Should return a boolean value", () => {
         chai.assert.isBoolean(isStopped(movingCar), "Be sure to return a boolean value")
      })
      it("Should return false if the car object is  moving", () => {
         chai.assert.strictEqual(isStopped(movingCar), false, "Be sure to return false if the car is moving")
      })
      it("Should return true if the car is not moving", () => {
         chai.assert.strictEqual(isStopped(stoppedCar), true, "Be sure to return true if the car is stopped")
      })
   })
   describe("washDish Function", () => {
      let dirtyDish = {
         yourDish: false,
         isDirty: true,
      }
      let myDish = {
         yourDish: true,
         isDirty: false,
      }
      let myDirtyDish = {
         yourDish: true,
         isDirty: true
      }
      it("Should return false if the one of the properties is false", () => {
         chai.assert.isTrue(washDish(dirtyDish) == false && washDish(myDish) == false, "Be sure to return false if the dish is not yours or it is not dirty")
      })
      it("Should return true if the dish is yours and it is dirty", () => {
         chai.assert.strictEqual(washDish(myDirtyDish), true, "Be sure to return true if the dish is yours and it is dirty")
      })
   })
   describe("flightCost Function", () => {
      let flightArray
      try {
         flightArray = flights
      } catch (e) { console.error(e) }
      it("Should return the standard price of the flight if the firstClass parameter is set to false", () => {
         chai.assert.strictEqual(flightCost("LAX", false), 500, "Be sure to return the standard cost if flightClass is set to false")
         chai.assert.strictEqual(flightCost("CAN", false), 750)
      })

      it("Should return the firstclass price of a flight if firstClass is set to true", () => {
         chai.assert.strictEqual(flightCost("SEA", true), 1200, "Be sure to check if firstClass is set to true")
         chai.assert.strictEqual(flightCost("CAN", true), 6200)
      })
   })
})

