
class Sorter {
    //when you use or operator you can only access the properties that are common between number and string
    constructor(public collection: number[] | string){}

    sort(): void{
        const {length} = this.collection
        //bubble sort
        for(let i = 0; i< length; i++){
            for(let j = 0; j< length -i -1; j++){
                
                //instance of handles objects arraus
                if(this.collection instanceof Array){
                    //only works if collection is array of numbers
                    //if collection is an array of numbers
                    if(this.collection[j] > this.collection[j+1]){
                        const leftHand  =this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j+1] = leftHand
                    }
                }
                //only works if collection is a string
                //if collection is a string
                //typeof for string number bool symbols
                if(typeof this.collection === 'string'){
                    this.collection.
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