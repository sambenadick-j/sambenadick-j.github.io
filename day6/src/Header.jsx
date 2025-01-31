function Header() {
    console.log("currying")
    // function curry(a)
    // {
    //     (
    //         return (b) => 
    //             {
    //                 console.log(a+b);
    //             }
    //     )
    // }
    // curry(10)(20)
    // const curry = (A) => (B) => A+B
    // console.log(curry(10)(20))


    // function greet(greeting, symbol){
    //     symbol = this.symbol;
    //     console.log(greeting,`${this.name}, ${this.age}, ${symbol}`);
    // }
    // // {name} = user;

    // const user = {name:"John", age:27};
    // greet.call(user,"Hello","!");

    function add(a, b){
        console.log(a+b);
    }
    const addFive = add.bind(null, 5);

    addFive(10);


    const person = {
        name: "Rafi",
        greet: function() {
          console.log(`Hello, I am ${this.name}`);
        }
      };
      person.greet();
      
      const newPerson = { name: "Alice" };
      person.greet.apply(newPerson);
      
    
  return (
    <div>Header</div>
  )
}

export default Header