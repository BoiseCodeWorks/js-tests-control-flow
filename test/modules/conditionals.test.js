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
})