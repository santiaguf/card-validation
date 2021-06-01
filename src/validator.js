const isValid = (number) => {
  const numberArray = Array.from(String(number), Number);
  const inversedArray = numberArray.reverse();

  let sum = 0;
  let count = 1;
  inversedArray.forEach(function (digit){
    count %2 === 0 ? sum+= pairsum(digit) : sum+= digit;
    count++;
  });

  return sum%10 === 0;
};

const pairsum = (number) => {
  const operation = number*2;
  return operation > 9 ? (1+(2*(number-5))): operation;
}

const maskify = () =>  {
  return "is valid";
}

export {isValid, maskify};
