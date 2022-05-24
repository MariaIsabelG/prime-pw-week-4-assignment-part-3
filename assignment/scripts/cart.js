console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];

function addCart(newItem){
    if(newItem=basket.push('item'));
            return true
        }
console.log('We added an item to the cart, so it should be true:', addCart());

let list;
function listItems(list){
    console.log('The list of items include:', list)
    for(i=0;i<basket.length; i++);
    basket.push(list)
    return basket
}

listItems('chocolate');
listItems('bread');
listItems('milk');
listItems('butter');


function empty(anyArray){
        anyArray.length=0
        return anyArray
    }

console.log('Basket is now empty:', empty(basket))
