let a = function(x){return x+1}
let b = function(x){return x+2}
let c = function(x){return x+3}
let d = function(x){return x+4}
let compose = function(a,b,c,d) {
    return function(x){
        return a(b(c(d(x))))
    }
}
let f = compose(a,b,c,d) 
console.log(f(10))