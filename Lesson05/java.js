function startbanking() {

  let balance = 0;
  let deposit = 0;
  let withdraw = 0;
  let input = 0;


input = prompt('Enter one of the following: Q to quit, W to withdraw, D to deposit or B to view balance.');


  while (input != 'Q')  {


    switch (input) {

      case 'D':{
      deposit = prompt('Enter amount to deposit');

      balance = balance + deposit;


      break;
      }

      case 'W':{
      withdraw = prompt('Enter amount to withdraw');

      balance = balance - withdraw;

      break;
      }

      case 'B': {

        alert (+balance);

        break;
      }

      default: {
       return 'not a valid entry';
      }

    }

input = prompt('Enter one of the following: Q to quit, W to withdraw, D to deposit or B to view balance.');
}
alert('Thanks for using this banking page!');
}
