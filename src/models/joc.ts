export class Joc {
  public players: string[] = ['Curdu', 'Gerard', 'Roger'];
  public playersImg: string[] = ['/assets/img/profile/monkey.png','/assets/img/profile/pinguin.svg','/assets/img/profile/seriois-woman.svg'];
  public stack: string[] = [];
  public playedCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    for(let i = 1; i < 13; i++) {
      this.stack.push('spade_' + i)
      this.stack.push('hearts_' + i)
      this.stack.push('clubs_' + i)
      this.stack.push('diamonds_' + i)

      shuffle(this.stack);
    }
  }
}

function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
