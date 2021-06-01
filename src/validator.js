const isValid = (number) => {
  const numberArray = Array.from(String(number), Number);
  const inversedArray = numberArray.reverse();

  let sum = 0;
  let count = 1;
  inversedArray.forEach(function (digit){
    count %2 === 0 ? sum+= pairSum(digit) : sum+= digit;
    count++;
  });

  return sum%10 === 0;
};

const pairSum = (number) => {
  const operation = number*2;
  return operation > 9 ? (1+(2*(number-5))): operation;
}

const maskify = (string) => {

  const newArray = isNaN(string) ?  Array.from(String(string)) : Array.from(String(string), Number)
  const arrayLength = newArray.length;

  if(arrayLength > 4){
    const maskedItems = arrayLength - 4;

    for(let i= 0; i<maskedItems; i++){
      newArray[i] = "#";
    }

    return newArray.join("");
  }
  return string;
};

export {isValid, maskify, pairSum};
