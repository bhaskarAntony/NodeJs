const vm = require('vm')

//original object
let user = {
    name: "Raju",
    email: "Bhaskar@gmail.com",
    mobile: 9606729320,
    age:23
}
console.log('before = ', user)

//vertual object (temperary object)

vm.createContext(user)
vm.runInContext(`name = "john";email = "john@gmail.com";age+=5;`, user)
console.log('after = ', user)

//output: 
/*
before =  {
  name: 'Raju',
  email: 'Bhaskar@gmail.com',
  mobile: 9606729320,
  age: 23
}
after =  {
  name: 'john',
  email: 'john@gmail.com; age+=5',
  mobile: 9606729320,
  age: 23
}
*/