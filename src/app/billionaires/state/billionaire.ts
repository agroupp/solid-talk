export interface Billionaire {
  id: number;
  rank: number;
  finalWorth: number;
  personName: string;
  source: string;
  industries: string;
  countryOfCitizenship: string;
  gender: 'M' | 'F';
  lastName: string;
  estWorthPrev: number;
}
