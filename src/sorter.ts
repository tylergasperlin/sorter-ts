
//directions on how you can be an argument to Sorter
//tbis makes it so each use of Sorter must implement length commpare and swap
interface Sortable {
  length: number;
  compare(leftIndex:number, rightIndex:number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  //these are promises that the properties will exist in future
  abstract compare(leftIndex: number, rightIndex:number):boolean
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;


  sort(): void {
    const { length } = this;
    //bubble sort
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
