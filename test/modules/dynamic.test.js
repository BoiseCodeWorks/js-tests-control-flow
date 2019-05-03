describe("dynamic.js", async () => {
  let dynamic
  before(async () => {
    let x = await import('../../app/dynamic.js')
    dynamic = x.dynamic
  })

  describe("dynamic Function", () => {
    it("dynamic functions can be loaded", () => {
      chai.assert.strictEqual(9, dynamic(9))
    })
  })
})