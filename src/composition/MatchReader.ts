import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from '../utils'
import { MatchData, MatchResult } from '../MatchType'
interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  matches: MatchData[] = []

  static readCsv(filePath: string): MatchData[] {
    const matchReader = new MatchReader(new CsvFileReader(filePath))
    matchReader.load()
    return matchReader.matches
  }

  constructor(public reader: DataReader) {}
  load() {
    this.reader.read()
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        +row[3],
        +row[4],
        row[5] as MatchResult,
        row[6],
      ]
    )
  }
}
