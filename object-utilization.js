
const person = {
    firstName: 'shafait',
    lastName: 'Ul Haque Siddique',
    age: 27,
    education: 'BSc Computer Science and Engineering',
    proffession: 'Software Engineer',
    cars : {
        brand: 'porsche 911 turbo RS',
        unit: 1,
        color:'black',
        price: 20000000

    },
    status: 'Married',
    wifeName: 'Samanta',
    friends : ['Anik','steve','yeun', 'Meow'],

    act: function ()
    {
      return 'You are running!';
    }

};

console.log(person.act());