export class NumbersCollection {
    //this initialized data, assigns data to type number array, creates a constructor that sets this.data = data
    constructor(public data: number[]){}
    //get means we can can access length by using numbersCollection.length instead of numbersCllection.length()
    get length(): number{
        return this.data.length
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void{
        const leftHand= this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}   