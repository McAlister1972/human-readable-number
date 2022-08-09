module.exports = 
function toReadable (number) {
    let arrOfNumber = [
        {val: 100, str: "hundred"},
        {val: 90, str: "ninety"},
        {val: 80, str: "eighty"},
        {val: 70, str: "seventy"},
        {val: 60, str: "sixty"},
        {val: 50, str: "fifty"},
        {val: 40, str: "forty"},
        {val: 30, str: "thirty"},
        {val: 20, str: "twenty"},
        {val: 19, str: "nineteen"},
        {val: 18, str: "eighteen"},
        {val: 17, str: "seventeen"},
        {val: 16, str: "sixteen"},
        {val: 15, str: "fifteen"},
        {val: 14, str: "fourteen"},
        {val: 13, str: "thirteen"},
        {val: 12, str: "twelve"},
        {val: 11, str: "eleven"},
        {val: 10, str: "ten"},
        {val: 9, str: "nine"},
        {val: 8, str: "eight"},
        {val: 7, str: "seven"},
        {val: 6, str: "six"},
        {val: 5, str: "five"},
        {val: 4, str: "four"},
        {val: 3, str: "three"},
        {val: 2, str: "two"},
        {val: 1, str: "one"}
      ];
      let result = '';
      if (number === 0) {return "zero";
    } else {
      for (let num of arrOfNumber) {
        if (number >= num.val) {
          if (number < 100) {
            result = result + num.str;
            number = number - num.val;
            if (number > 0) {
              result = result + ' ';
            }
          } else {
            let count = Math.floor(number / num.val);
            result = result + toReadable(count) + ' ' + num.str;
            number = number - num.val * count;
            if (number > 0) {result = result + " ";}
          }
        }
      }return result;
    }
      };  
