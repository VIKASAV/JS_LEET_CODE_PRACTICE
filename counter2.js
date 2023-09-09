
var createCounter = function(init){

    var og = init;

    return{

        increment:function(){
            return ++og;
        },
    
        reset:function(){
            og = init;
            return og;
        },

        decrement:function(){
            return --og;
        }
    }
    
}

counter2 = createCounter(0);
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.reset());
console.log(counter2.reset());
console.log(counter2.decrement());
