

const employees = {name:"xyz", id:123};

const emp = employees.name;
const emp1 = employees.id;
console.log(emp)
console.log(emp1)

let arr = new Array(6);

arr = [1,'sdfg',45,{name:"xyz", id:123},99]

arr.length=10

console.log(arr)
console.log(arr[3].id)

function V26(){

    const platform = ["Vikas","26","A","V"]

    let text=""
    let x
    for(x in platform){

        text+=platform[x]
        console.log(text)
    }


}
V26()