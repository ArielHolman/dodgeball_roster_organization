// import modules
const assert = require("assert")

// import classes
const {
  Player,
  DodgeFathersTeammate,
  BallarinasTeammate,
} = require("../main.js")

// declare and define variables

if (typeof describe === "function") {
  describe("Player", () => {
    it("Should add person to listOfPlayers", () => {
      const newPlayer1 = new Player("Beyonce")
      assert.equal(newPlayer1.name, "Beyonce")
    })
  })
}
