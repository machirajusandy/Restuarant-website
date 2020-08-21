function hello(){
    console.log('Hello', this)
}

const person = {
    name: 'san',
    age: 30,
    sayHello: hello
}