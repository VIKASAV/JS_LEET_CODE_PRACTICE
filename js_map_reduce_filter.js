
arr = new Array(1,2,3,4,5,6,7,8,9,0)

n = arr.length;
console.log('Array length is '+n);

//map
function square(n){
    return n*n
}

function cubes(n){
    return n*n*n
}

var new_arr = arr.map(square);
console.log(new_arr)
console.log(typeof(new_arr))
console.log(arr.map(cubes))

//reduce

function sum(a,b){
    return a+b
}

new_arr =arr.reduce(sum)
console.log('reduce result is '+new_arr)

// filter

function even(n){
    if(n%2==0){
        return n
    }
}

new_arr =arr.filter(even)
console.log(new_arr)