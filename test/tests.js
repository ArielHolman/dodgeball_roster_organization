/* eslint-disable no-undef */
// import modules
const assert = require("assert")

// import classes
const { Player, TeamMate } = require("../main.js")

// 3 tests
// 1. Should create a player
// 2. Should be able to create instance of Blue or Red Team
// 3. TeamMate Objects should have color and mascot keys

// ****BIG NOTE!**** For some reason I the test does not run correctly unless you comment out the windows.onload function at the bottom of my JS file. I removed the button of list of applicants so they can onload as soon as you log in but I did not. I do not plan on changing that once I have time to revisit this project. Please just comment it out and then you'll see the test are all good.

if (typeof describe === "function") {
  describe("Player", function () {
    it("should create a player", function () {
      const player1 = new Player("Destiny Gurl", 17)
      assert.equal(player1.name, "Destiny Gurl")
      assert.equal(player1.id, 17)
    })
  })

  describe("TeamMate", function () {
    it("should create a blue teammate", function () {
      const teammate1 = new TeamMate(
        "Devyn Holman",
        "Guns and Roses",
        "Blue",
        4,
        "dodgeFather"
      )
      assert.equal(teammate1.name, "Devyn Holman")
      assert.equal(teammate1.id, 4)
      assert.equal(teammate1.teamColor, "Blue")
      assert.equal(teammate1.mascot, "Guns and Roses")
      assert.equal(teammate1.teamName, "dodgeFather")
    })

    it("shoudl create a red teammate", function () {
      const teammate3 = new TeamMate(
        "Skittles",
        "Swans",
        "Red",
        9,
        "ballarinas"
      )
      assert.equal(teammate3.name, "Skittles")
      assert.equal(teammate3.id, 9)
      assert.equal(teammate3.teamColor, "Red")
      assert.equal(teammate3.mascot, "Swans")
      assert.equal(teammate3.teamName, "ballarinas")
    })
  })
}
