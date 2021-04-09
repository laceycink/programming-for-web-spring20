// for loops

for (x =0; x<= 10; x = x + 1) {
    val = x + 10
}
console.log(val)

// while loops
var starter = 10 
while (starter > 0) {
    console.log(starter)
starter = starter -1
}

// for in - only objects
var obby = {size: 5, weight: 400, color: 'pink'}
for (x in obby) {
    console.log( obby[x] )
}

// for each loop
var things = [1, 2, 3, 4, 'hello', 'pink', 78]

things.forEach(function(val, i) {
    console.log(i)
})