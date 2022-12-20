const standardDeviation = function(arr) {
   let sum = 0; 
   let sumSqrt = 0;
   const elementsAmount = arr.length;

   arr.forEach(element => sum += element);
   let averageValue = sum / elementsAmount;
   console.log(averageValue);

   arr.forEach(element => sumSqrt += (Math.pow(element - averageValue, 2)));
   let dispersion = sumSqrt / elementsAmount;
   console.log(dispersion);

   return Math.sqrt(dispersion).toFixed(3);
};

console.log(standardDeviation([23, 37, 45, 49, 56, 63, 63, 70, 72, 82]));