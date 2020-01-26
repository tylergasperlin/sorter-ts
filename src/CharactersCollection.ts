import {Sorter} from './Sorter'

export class CharactersCollection extends Sorter{
    constructor(public data: string){
        //must call super because sorter might define a constructor and we have a constructor in characterscollection
        super()
    }

    get length(): number{
        return this.data.length;
    }

    compare(leftIndex:number, rightIndex: number): boolean{
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    }

    swap(leftIndex: number, rightIndex: number): void{
        const characters = this.data.split('');

        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;

        this.data = characters.join('')
    }
}