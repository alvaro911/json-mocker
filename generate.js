const faker = require('faker')
const _ = require('lodash')

function makeName(){
  const nameArr = []
  for(let i = 0; i < 8; i++){
    nameArr.push(faker.name.firstName())
  }
  return nameArr
}

module.exports = () => {
  return {
    admin: _.times(10, (n) => {
      return {
        id: faker.random.uuid(),
        tournament_name: faker.name.findName(),
        min_number_players: 5,
        number_of_teams: 4,
        teams: [
          {
            team_id: faker.random.uuid(),
            players: makeName()
          },
          {
            team_id: faker.random.uuid(),
            players: makeName()
          },
          {
            team_id: faker.random.uuid(),
            players: makeName()
          },
          {
            team_id: faker.random.uuid(),
            players: makeName()
          }
        ],
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip_code: faker.address.zipCode()
      }
    })
  }
}
