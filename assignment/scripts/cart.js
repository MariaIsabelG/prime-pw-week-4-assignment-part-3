console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket=[];

function addCart(newItem){
    console.log('Is it true we added an item?', addCart())
  for(i=0; i<basket.length; i++){
      basket.push(newItem)
      if(basket[i])
      return true
  }
}



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


