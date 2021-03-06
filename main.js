/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable array-callback-return */
/* eslint-disable no-undef */
/* eslint-disable max-classes-per-file */
// eslint-disable-next-line prefer-const
let arrOfApplicants = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
  },
]

const listOfPlayers = []
const dodgeFathersTeam = []
const ballarinasTeam = []

// created class for applicants because it made the most sense since we wanted to carry over infromation from the applicant becoming a player.
class Applicant {
  constructor(name, id, age, skillSet, placeBorn) {
    this.id = id
    this.age = age
    this.name = name
    this.skillSet = skillSet
    this.placeBorn = placeBorn
  }
}

const makeTeamMate = (teamName, id, name) => {
  // if onclick dodge fathers then assign mascot, color and move to dodgefathers array and show on the DOM
  if (teamName === "dodgeFathers") {
    const teamMate = new TeamMate(
      name,
      "Guns and Roses",
      "Blue",
      id,
      teamName
    ).addTeamMate()
    dodgeFathersTeam.push(teamMate)
  } else {
    // if onclick ballerinas then assign mascot, color and move to ballerinas array and show on the DOM
    const teamMate = new TeamMate(
      name,
      "Swans",
      "Red",
      id,
      teamName
    ).addTeamMate()
    ballarinasTeam.push(teamMate)
  }
}
// Add player class constructos to people who become players
class Player extends Applicant {
  constructor(
    name,
    id,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(name, id)
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }

  // eslint-disable-next-line class-methods-use-this
  addPlayer() {
    const playersList = document.getElementById("players")
    const li = document.createElement("li")
    const applicantName = document.createElement("h4")
    const playerId = this.id
    const playerName = this.name
    applicantName.appendChild(
      document.createTextNode(`${playerName} - ${playerId}`)
    )
    // create a button to add a player to the Dodgefathers team
    const dodgeFathersbtn = document.createElement("button")
    dodgeFathersbtn.innerHTML = "Dodge Fathers"
    dodgeFathersbtn.addEventListener("click", function () {
      makeTeamMate("dodgeFathers", playerId, playerName)
      deleteApplicant(event)
    })

    // create a button to add a player to the Ballarinas team
    const ballarinasBtn = document.createElement("button")
    ballarinasBtn.innerHTML = "Ballarinas"
    ballarinasBtn.addEventListener("click", function () {
      makeTeamMate("ballarinas", playerId, playerName)
      deleteApplicant(event)
    })

    playersList.append(li)
    li.appendChild(applicantName)
    li.appendChild(dodgeFathersbtn)
    li.appendChild(ballarinasBtn)
  }
}

// Extend the mascot and colors to players once put into a team.
class TeamMate extends Player {
  constructor(
    name,
    mascot,
    teamColor,
    id,
    teamName,
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience
  ) {
    super(
      name,
      id,
      canThrowBall,
      canDodgeBall,
      hasPaid,
      isHealthy,
      yearsExperience
    )
    this.mascot = mascot
    this.teamColor = teamColor
    this.teamName = teamName
  }

  addTeamMate() {
    // TODO:: ask Clayton how to clean up "this" so properties aren't mixed up & can I remove undefined properties
    console.log(this)
    const playerName = this.name
    const playerId = this.id
    const { teamName } = this
    const ul = document.getElementById(teamName)
    const teamMateInfo = `<li class="applicant-entry">
      <h4 class="applicant-name">${playerName} - <span class="applicant-age"> ${playerId}</span>
      <span class="applicant-age"> ${this.mascot}</span><span class="applicant-age"> ${this.teamColor}</span>
      </h4>`
    ul.insertAdjacentHTML("afterbegin", teamMateInfo)
  }
}

// will remove a li from it's parent node
const deleteApplicant = (event) => {
  const applicant = event.target.parentNode
  const listOfApplicants = applicant.parentNode
  listOfApplicants.removeChild(applicant)
}

// this makes an applicnat into a player
const makePlayer = (name, id) => {
  // const [applt] = arrOfApplicants.filter((applicant) => applicant.id === id)
  const player = new Player(name, id).addPlayer()
  listOfPlayers.push(player)
}

// Function that adds the applicants the lists and creates a button to make a player
const listApplicants = (arr) => {
  const allApplicants = this.document.getElementById("applicants")
  arr.map((applicant) => {
    const li = this.document.createElement("li")
    const button = this.document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function (event) {
      makePlayer(applicant.name, applicant.id)
      deleteApplicant(event)
    })
    li.appendChild(button)
    li.appendChild(
      this.document.createTextNode(`${applicant.name} - ${applicant.id}`)
    )
    allApplicants.append(li)
  })
}

// I deleted the button to load the list becuase I want the list to upload upon opening the site
this.window.onload = function () {
  listApplicants(arrOfApplicants)
}

module.exports = {
  Player,
  TeamMate,
  makeTeamMate,
  makePlayer,
  listApplicants,
}
