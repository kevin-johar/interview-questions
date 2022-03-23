const arr = [1,4,74,23,53];

const median = (array) => {
  const middle = Math.floor(array.length/2);
  //.sort() converts values to string and then compares,
  // which means 80 => "80" comes before 9 => "9"
  const sorted = array.sort((a,b) => {
    if (a>b) {
      return 1;
    } else if(a<b) {
      return -1;
    }

    return 0;
  });
  console.log('Median Value: ', sorted[middle]);
};

median(arr);
