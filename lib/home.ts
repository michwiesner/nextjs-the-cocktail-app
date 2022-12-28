export const getMappedInfo = (array: any[], accesor: string) =>
  array.map((object) => object[accesor]);