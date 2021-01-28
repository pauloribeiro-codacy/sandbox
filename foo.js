exports.pluralize = function (count, singular, plural) {
  if (count === 1) {
    return `${count} ${singular}`;
  }
  plural = plural || `${singular}s`;
  return `${count} ${plural}`;
};

exports.fizzbuzz = function (input) {
  let output = "";
  if(input % 3 === 0){
      output += "Fizz";
  }
  if(input % 5 === 0){
      output += "Buzz";
  }

  return output.length > 0 ? output : input.toString();
};

exports.sum = function (a,b) {
  return a+b;
};

exports.mul = function (a,b) {
  return a*b;
};


exports.fibonacci = function(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}


exports.ransomNote = function(note, magazine) {
  const magazineWords = magazine.split(" ");
  const magazineHash = {};

  magazineWords.forEach(word => {
      if (!magazineHash[word]) magazineHash[word] = 0;
      magazineHash[word]++;
  });

  const noteWords = note.split(" ");
  let possible = true;

  noteWords.forEach(word => {
      if (magazineHash[word]) {
          magazineHash[word]--;
          if (magazineHash[word] < 0) possible = false;
      } else possible = false;
  });

  return possible;
};

