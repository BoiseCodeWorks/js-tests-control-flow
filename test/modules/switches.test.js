describe("switches.js", () => {
   describe("daysPosition Function", () => {
      it("returns a number (or string if bad input)", () => {
         chai.assert.isTrue(typeof daysPosition("sunday") == "number" || typeof daysPosition("sunday") == "string", "Return type must be number (or string if bad input).")
      })
      it("returns the accurate number for offset false", () => {
         chai.assert.strictEqual(daysPosition("monday"), 2, "With offset false the week starts on Sunday.")
      })
      it("returns the accurate number for offset true", () => {
         chai.assert.strictEqual(daysPosition("monday", true), 1, "With offset true the week starts on Monday.")
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
})