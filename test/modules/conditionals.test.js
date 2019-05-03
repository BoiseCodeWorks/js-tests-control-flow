describe("conditionals.js", () => {
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
         chai.assert.isTrue(timeOfDayGreeting(5) == "good morning" && timeOfDayGreeting(11) == "good morning" && timeOfDayGreeting(7) == "good morning", "Be sure to return 'good morning' between (and including) the hours 5 and 11")
      })
      it("Function should return Good Afternoon during afternoon hours", () => {
         chai.assert.isTrue(timeOfDayGreeting(13) == "good afternoon" && timeOfDayGreeting(12) == "good afternoon" && timeOfDayGreeting(17) == "good afternoon", "Be sure to return 'good afternoon' between (and including) the hours 12 and 17")
      })
      it("Function should return Good Evening for evening hours", () => {
         chai.assert.isTrue(timeOfDayGreeting(18) == "good evening" && timeOfDayGreeting(20) == "good evening" && timeOfDayGreeting(21) == "good evening", "Be sure to return 'good evening' between the hours of 22 - 24 and 1 - 4")
      })
      it("Function should return Good Night for evening hours", () => {
         chai.assert.isTrue(timeOfDayGreeting(22) == "good night" && timeOfDayGreeting(23) == "good night" && timeOfDayGreeting(24) == "good night", "Be sure to return 'good night' between (and including) the hours 22 and 24")
      })

   })
})