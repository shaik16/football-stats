import { Summary } from './composition/Summary'
import { MatchReader } from './composition/MatchReader'
// import { MatchReader } from './inhertiance/MatchReader'

// Inheritance Approach
// const reader = new MatchReader('football.csv')
// reader.read()

// Composition Approach
// const csvFileReader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()

// Using Static
const matches = MatchReader.readCsv('football.csv')

// new Summary(new WinsAnalysis('Man United'), new ConsoleReport()).buildAndPrintReport(matchReader.matches)

// new Summary(new WinsAnalysis('Man United'), new HtmlReport()).buildAndPrintReport(matchReader.matches)

Summary.winsAnalysisWithHtmlReport('Bournemouth').buildAndPrintReport(matches)
