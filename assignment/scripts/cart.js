console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];

function addCart(newItem){
    basket.push(newItem);
    if(basket[0]===newItem){
        return true
    }else{
        return false
    }
}
console.log('Added shampoo, so it should be true:', addCart('shampoo'))

let list;
function listItems(list){
    for(let i=0;i<basket.length;i++){
        return list = basket[i]
    }
}
console.log(listItems(list))



function empty(anyArray){
        anyArray.length=0
       return anyArray
    }
console.log('Emptied the basket:', empty(basket));

