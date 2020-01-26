

export class Sorter {
    //when you use or operator you can only access the properties that are common between number and string
    constructor(public collection: ){}

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
}

