import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection'
import {LinkedList} from './LinkedList'

//sort array of numbers
const numbersCollection = new NumbersCollection([-5000,100000,1000,10,3,-5,0])
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data)

console.log('---------------------------')
 
//sort string
const charactersCollection = new CharactersCollection('tylerGasperling')
const stringSorter = new Sorter(charactersCollection)
stringSorter.sort()
console.log(charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(5000)
linkedList.add(-10);
linkedList.add(-3)
linkedList.add(100)

console.log('---------------------------')

const sorter3 = new Sorter(linkedList)
sorter3.sort()
linkedList.print()