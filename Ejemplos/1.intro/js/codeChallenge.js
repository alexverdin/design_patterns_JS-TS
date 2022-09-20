/** Create a function that takes a variable number of arguments,
 * each argument representing the number of items in a group.
 * The function should return the number of permutations (combinations)
 * of choices you would have if you selected one item from each group.
 * 
 * Examples:
 * combinations(2, 3) ➞ 6
 * combinations(3, 7, 4) ➞ 84
 * combinations(2, 3, 4, 5) ➞ 120
 * Notes:
 * Don't overthink this one.
 * Input may include the number zero.
 */

function combinations(){
    let numbers = [...arguments];
    console.log(numbers);
    let res = parseFloat(numbers[0]);
    //console.log(res);

    for(let i=1; i<numbers.length; i++){
        if(parseFloat(numbers[i]) != 0){ // avoid combination with zero
            res = res * parseFloat(numbers[i]);
        }
    }
    return res;
}

function combinations2(items) {

    return [...arguments].reduce((acc,v) => v ? acc*v : acc+v, 1)

}

console.log(combinations('2','3','4'));
console.log(combinations2('2','3','4'));