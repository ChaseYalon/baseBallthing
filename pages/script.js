//each player is defined as a hitter or a pitcher and has a fielder also
class Player {
    constructor(name){
        this.name=name
    }
    //add more to constructor, methods?
}
class Hitter extends Player {
    constructor(atBats,singles,doubles,tripples,homeRuns){
        this.atBats=atBats
        this.singles=singles
        this.doubles=doubles
        this.tripples=tripples
        this.homeRuns=homeRuns
    }
    
}
class Feilder extends Player {

}
class Pitcher extends Player {

}