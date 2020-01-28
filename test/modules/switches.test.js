describe("switches.js", () => {
   describe("daysPosition Function", () => {
      it("returns a number (or string if bad input)", () => {
         chai.assert.isTrue(typeof daysPosition("Sunday") == "number" || typeof daysPosition("Sunday") == "string", "Return type must be number (or string if bad input).")
      })
      it("returns the accurate number for offset false", () => {
         chai.assert.strictEqual(daysPosition("Monday"), 2, "With offset false the week starts on Sunday.")
      })
      it("returns the accurate number for offset true", () => {
         chai.assert.strictEqual(daysPosition("Monday", true), 1, "With offset true the week starts on Monday.")
      })
      it("handles bad inputs gracefully", () => {
         chai.assert.strictEqual(daysPosition('foobar'), "That's not a day of the week", "Returns 'That's not a day of the week' if bad input given.")
      })
   })
   describe("golfScore Function", () => {
      it("returns a string", () => {
         chai.assert.isString(golfScore(3, 3), "Return type must be a string.")
      })
      it("returns the expected golf score", () => {
         chai.assert.strictEqual(golfScore(3, 5).toLowerCase(), "eagle")
      })
      it("returns 'Ouch' for any score greater than 2 over par", () => {
         chai.assert.strictEqual(golfScore(800, 3).toLowerCase(), "ouch", "utilize your default component of the switch statement!")
      })
   })
   describe("cardCounter Function", () => {
      it("returns a string", () => {
         chai.assert.isString(cardCounter('8'), "Return type must be a string.")
      })
      it("returns the correct count and action after several executions", () => {
         chai.assert.isTrue((() => {
            try {
               count = 0
            } catch(e) { console.error(e) }
            cardCounter('K') // -1
            cardCounter('7') // -1
            cardCounter('K') // -2
            let str = cardCounter('2') // -1
            if (str.toLowerCase() != '-1 hold') return false
            return true
         })(), "Refer to the table to make sure you're assigning the correct value to the count depending on the card!")
      })
   })
})
