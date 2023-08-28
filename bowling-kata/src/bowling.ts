export function score(input: number[]): number {

  var result: number = 0;
  var currentBallIndex: number = 0;

  for (var frame: number = 0; frame < 10; frame++) {
      result += input[currentBallIndex];
      if (input[currentBallIndex] === 10) {
          result += input[currentBallIndex + 1] + input[currentBallIndex + 2];
          currentBallIndex++;
      } else {
          if ((input[currentBallIndex] + input[currentBallIndex + 1]) === 10) {
              result += input[currentBallIndex + 1] + input[currentBallIndex + 2];
          } else {
              result += input[currentBallIndex + 1]
          }
          currentBallIndex += 2;
      }
  }

  return result;
}
