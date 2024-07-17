const calculateAverage = (arrayOfNumbers) => {
  if (!arrayOfNumbers) {
    return "No numbers to calculate average";
  }

  if (!Array.isArray(arrayOfNumbers))
    return "Please provide an array of numbers";

  const result =
    arrayOfNumbers.reduce((acc, cur) => acc + cur, 0) / arrayOfNumbers.length;

  return result;
};

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
