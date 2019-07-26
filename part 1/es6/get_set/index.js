class A{
    constructor(person){
        this.person = person
        // this.name = 'aaa' TypeError: Cannot set property name of #<A> which has only a getter
    }
    get getPerson(){
        return this.person
    }
    get thePerson(){
        console.log('trigger')
        return this.person
    }
    set changePerson(value){
        this.person = value
    }
    get name(){
        return this.person.name
    }
}
var a = new A({name:'123'})
var p = a.getPerson
p.name = '321'
console.log(a.thePerson)
// a.thePerson // trigger 调用 thePerson getter
// console.log(a.person) //  { name: '123' }
// console.log(a.name) // 123 调用 name getter
// a.thePerson = 123 // thePerson 是 getter 取值函数，赋值无效
// console.log(a.name) // 123 调用
// a.changePerson = 123
// console.log(a.name) // undefined
// a.thePerson // trigger
