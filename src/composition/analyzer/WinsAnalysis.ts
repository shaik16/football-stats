import { MatchResult } from './../../MatchType'
import { MatchData } from '../../MatchType'
import { Analyzer } from './../Summary'
export class WinsAnalysis implements Analyzer {
  constructor(private teamName: string) {}
  run(matches: MatchData[]): string {
    let wins = 0

    matches.map((match: MatchData) => {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === this.teamName && match[5] === MatchResult.AwayWin) {
        wins++
      }
    })

    return `Team ${this.teamName} won ${wins} games`
  }
}
