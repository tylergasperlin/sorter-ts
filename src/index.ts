
class Sorter {
    constructor(public collection: number[]){}

    sort(): void{
        const {length} = this.collection
        //bubble sort
        for(let i = 0; i< length; i++){
            for(let j = 0; j< length -i -1; j++){
                if(this.collection[j] > this.collection[j+1]){
                    const leftHand  =this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j+1] = leftHand
                }
            }
        }
    }

    //same as above
    // constructor(collection: number[]){
    //     this.collection = collection
    // }
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort();
console.log(sorter.collection)