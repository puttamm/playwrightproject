class Employee{
    constructor(name, id){
        this.name=name;
        this.id=id;

    }
method(){
console.log(this.name)
console.log(this.id)

}
}
const emp=new Employee("swetha", 20)
emp.method();
