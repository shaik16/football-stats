import { HtmlReport } from './report/HtmlReport'
import { WinsAnalysis } from './analyzer/WinsAnalysis'
import { MatchData } from './../MatchType'
export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport())
  }

  constructor(private analyzer: Analyzer, private outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
