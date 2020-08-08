/* eslint-disable max-classes-per-file */
window.onload = function () {
  listApplicants(arrOfApplicants)
}

// {
//   id: 2,
//   name: "Charles Young",
//   age: 55,
//   skillSet: "welding",
//   placeBorn: "Omaha, Nebraska",
// },
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

/* <button onclick="submit()">Submit</button> */

// const submit = () => {
//   newApplicant = ""
//   arrOfApplicants.push(newApplicant)
// }

class Player {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience) {
    this.canThrowBall = canThrowBall
    this.canDodgeBall = canDodgeBall
    this.hasPaid = hasPaid
    this.isHealthy = isHealthy
    this.yearsExperience = yearsExperience
  }
}
class DodgeFathersTeammate extends Player {
  constructor(
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    mascot,
    teamColor
  ) {
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.mascot = mascot
    this.teamColor = teamColor
  }
}
class BallarinasTeammate extends Player {
  constructor(
    canThrowBall,
    canDodgeBall,
    hasPaid,
    isHealthy,
    yearsExperience,
    mascot,
    teamColor
  ) {
    super(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience)
    this.mascot = mascot
    this.teamColor = teamColor
  }
}

const listApplicants = (arr) => {
  const allApplicants = this.document.getElementById("applicants")
  arr.map((applicant) => {
    const li = this.document.createElement("li")
    const button = this.document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function (event) {
      makePlayer(applicant.id, event)
      deleteApplicant(event)
    })

    li.appendChild(button)
    li.appendChild(
      this.document.createTextNode(`${applicant.name} - ${applicant.age}`)
    )
    allApplicants.append(li)
  })git status
}
const deleteApplicant = (event) => {
  const applicant = event.target.parentNode
  const listOfApplicants = applicant.parentNode
  listOfApplicants.removeChild(applicant)
}

const makePlayer = (id) => {
  // listOfPlayers[]
  // onclick, find applicant in applicantArray & add them to listOfPlayers Array
  const [player] = arrOfApplicants.filter((applicant) => applicant.id === id)

  // listOfPlayers.push(id)
  listOfPlayers.push(player)
  const playersList = this.document.getElementById("players")

  const applicantInfo = `<li class="applicant-entry">
    <h4 class="applicant-name">${player.name} - <span class="applicant-age">age ${player.age}</span></h4>
    </li>`
  playersList.insertAdjacentHTML("afterbegin", applicantInfo)

  // alert(`li ${id} was clicked!`)
}

// module.exports = { Player, BallarinasTeammate, DodgeFathersTeammate }
