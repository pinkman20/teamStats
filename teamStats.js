const team  = {
    _players: [
        {firstName:"Harry",lastName:"Kane",age:28},
        {firstName:"Heung-Ming",lastName:"Son",age:27},
        {firstName:"Hugo",lastName:"Lloris",age:30}
    ],
    _games: [
        {opponent:"Chelsea",teamPoints:42,opponentPoints:27},
        {opponent:"Arsenal",teamPoints:42,opponentPoints:37},
        {opponent:"West-Ham",teamPoints:42,opponentPoints:17}
    ],

    get players() {
        return this._players
    },
    get games() {
        return this._games
    },

    addPlayer(firstName,lastName,age) {
        let player = {
            firstname:firstName,
            lastName:lastName,
            age:age         
        };
        this.players.push(player)


    },

    addGames(opponent,teamPoints,opponentPoints) {
        let game = {
            opponent:opponent,
            teamPoints:teamPoints,
            opponentPoints:opponentPoints,
        };
        this.games.push(game)
    }
}

team.addPlayer('Gareth','Bale',31)
team.addPlayer('Joe','Hart',32)
console.log(team.players)


team.addGames('Manchester United',42,33)
team.addGames('Crystal Palace',42,29)
console.log(team.games)

