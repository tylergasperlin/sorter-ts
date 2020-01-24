
class Sorter {
    //when you use or operator you can only access the properties that are common between number and string
    constructor(public collection: number[] | string){}

    sort(): void{
        const {length} = this.collection
        //bubble sort
        for(let i = 0; i< length; i++){
            for(let j = 0; j< length -i -1; j++){

                //if collection is an array of numbers
                if(this.collection[j] > this.collection[j+1]){
                    const leftHand  =this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j+1] = leftHand
                }

                //if collection is a string
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