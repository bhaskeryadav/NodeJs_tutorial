var square = x => x*x;

var usr = {
  name : 'Bhasker',
  sayHi : () =>{
    console.log(arguments);
    console.log(`${this.name} `);
  },
  sayHi2(){
    console.log(arguments);
    console.log(`${this.name}`);
  }
}


console.log(square(9));
usr.sayHi([1,2,2]);
usr.sayHi2([1,2,3]);
