const faker = require('faker')
const _ = require('lodash')

function makeTeam(){
  const playersArr = []
  for(let i = 0; i < 11; i++){
    const name = {player: faker.name.lastName()},
          number = {jersery: faker.random.number()}
    playersArr.push(Object.assign({}, name, number))
  }
  return playersArr
}

module.exports = () => {
  return {
    team: _.times(1, n => {
      return {
        _id: faker.random.uuid(),
        team_name: faker.name.findName(),
        players: makeTeam()
      }
    })
  }
}
