class Student{
    constructor(name, age, grade){
        this.name=name;
        this.age=age;
        this.grade=grade;
    }
    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

class Teacher extends Student{
    constructor(name, age, grade, subject){
        super(name, age, grade);
        this.subject=subject;
    }
    teach(){
        console.log(`I teach %{this.subject}`)
    }
}

const student=new Student('Kyra', 20, 12);
const teacher=new Teacher('John', 30, 12, 'Web Technologies');

console.log(student);
console.log(teacher);