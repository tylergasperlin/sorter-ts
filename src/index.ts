import {Sorter} from './sorter';
import {NumbersCollection} from './NumbersCollection';
 
const numbersCollection = new NumbersCollection([-5000,100000,1000,10,3,-5,0])
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data)