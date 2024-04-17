//  To Generate X and Y Points for setA and setB
const generateXandYPoints = (numPoints) => {
  let points = [];
  for (let i = 0; i < numPoints; i++) {
    points.push([Math.random() * 10, Math.random() * 10]);
  }
  return points;
};

// To Find Pairs with Euclidean distance less than Epsilon = 2
const findPairs = (setA, setB, epsilon) => {
  let pairs = [];
  for (let i = 0; i < setA.length; i++) {
    for (let j = 0; j < setB.length; j++) {
      if (euclideanDistance(setA[i], setB[j]) < epsilon) {
        pairs.push([setA[i], setB[j]]);
      }
    }
  }
  return pairs;
};

//  To Find a Euclidean Distaance between two points X and Y for SetA and SetB
const euclideanDistance = (point1, point2) => {
  return Math.sqrt(
    Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2)
  );
};

let setA = generateXandYPoints(5);
let setB = generateXandYPoints(5);
let epsilon = 2;

console.log("Set A:", setA);
console.log("Set B:", setB);
console.log(`Pairs with Euclidean distance less than ${epsilon} :`);
console.log(findPairs(setA, setB, epsilon));
