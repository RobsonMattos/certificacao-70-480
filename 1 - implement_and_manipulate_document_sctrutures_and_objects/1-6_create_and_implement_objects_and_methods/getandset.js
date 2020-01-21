/*
var log = [
    'test'
];

// notação literal.
var obj = {
    get latest() {
        if (log.length == 0) 
            return undefined;
        return log[log.length - 1]
    }
}

console.log(obj.latest);
*/

function Name (first, last) {
    this.first = first;
    this.last = last;
}

Name.prototype = {
    get fullName() {
        return this.first + " " + this.last;
    },

    set fullName(name) {
        var names = name.split(" ");
        this.first = names[0];
        this.last = names[1];
    }
}

console.log(Name.prototype);    // { fullName: [Getter/Setter] }

n = new Name('Claude', 'Monet') 
console.log(n.first)            // # "Claude"
console.log(n.last)             // # "Monet"
console.log(n.fullName)         // # "Claude Monet"
// n.fullName = "Gustav Klimt"
// n.first # "Gustav"
// n.last # "Klimt"