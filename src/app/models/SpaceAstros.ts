export interface SpaceAstrosModel {
  people: Array<People>;
  // eslint-disable-next-line id-blacklist
  number: number;
  message: string;
}
export interface People {
  craft: string;
  name: string;
}
