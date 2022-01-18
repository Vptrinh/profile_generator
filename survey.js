const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  //callback function to require another readline
  rl.question('What\'s an activity you like doing? ', (activity) => {
  
    rl.question(`What do you listen to while doing that? `, (music) => {
      
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (meal) => {
      
        rl.question(`Which sport is your absolute favourite? `, (sport) => {

          rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superpower) => {
            console.log(`Name: ${name}\nActivity: ${activity}\nMusic: ${music}\nFavourite Meal: ${meal}\nSport: ${sport}\nSuperpower: ${superpower}\n`);

            rl.close();
          });
        });
      });
    });
  });
});

