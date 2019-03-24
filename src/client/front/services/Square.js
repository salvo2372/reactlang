export function Square(){
  let example = () => {
    let numbers = [];
    for (let number of arguments){
      numbers.push(number * number);
    }
    return numbers;
  };
  return example();
}
