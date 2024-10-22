const person={
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
    greet: function(age, punctuation){
        console.log(`I am ${age} years old${punctuation}`)
    }

}

const person2={
    firstName : 'Kyra',
    lastName : 'Williams'
}

// person.fullName.call(person2)
// person.greet.call(person2, 20, '.')
// person.greet.apply(person2, [20, '.'])

const bound = person.greet.bind(person2)
// extrage functia

bound(20, '.')

