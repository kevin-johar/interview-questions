const studentCourseArr = [
  ['33', 'Linear Algebra'],
  ['74', 'History'],
  ['74', 'Linear Algebra'],
  ['35', 'Visual Arts'],
  ['35', 'History'],
  ['63', 'Physics'],
  ['74', 'Physics'],
  ['63', 'Linear Algebra']
];

/*
 *  Unique Pairings
 *  - Set gives us a list of unique values, sorted from low-high
 *  - Ex. [33, 35, 63, 74]
 *  - Loop through set pairing index 1 with all other indexes ahead of it
 *  - Then from index 2 to all index ahead of it
 *  - Continue until second last index
 *  - 33-35, 33-63, 33-74, 35-63, 35-74, 63-74
 *
 *  Expected Result
 *  {
 *    '33,35': [],
 *    '33,63': ['Linear Algebra'],
 *    '33,74': ['Linear Algebra'],
 *    '35,63': [],
 *    '35,74': ['History'],
 *    '63,74': ['Physics', 'Linear Algebra'],
 *  }
 * */

function findSimilarCourses(studentCoursePairs) {
  const studentIds = studentCoursePairs.map(x => x[0]);
  const uniqueIds = Array.from(new Set(studentIds));
  const results = {};

  for (let i = 0; i < uniqueIds.length - 1; i++) {
    for (let j = i+1; j < uniqueIds.length; j++) {
      const key = uniqueIds[i]+','+uniqueIds[j]
      results[key] = [];
    }
  }

  for (let i = 0; i < studentCoursePairs.length; i++) {
    for (let j = 0; j < studentCoursePairs.length; j++) {
      const [student1Id, student2Id] = [studentCoursePairs[i][0], studentCoursePairs[j][0]];
      /*  - Don't compare against same element or against same student id
          - If same element in array, short circuit skip iteration in loop
          - Otherwise check if student id is equal, if so skip iteration
      */
      if (i===j || student1Id === student2Id) continue;
      const min = Math.min(student1Id, student2Id);
      const max = Math.max(student1Id, student2Id);
      const course1 = studentCoursePairs[i][1];
      const course2 = studentCoursePairs[j][1];


      if (course1 === course2 && !results[min+','+max].includes(course1)) {
        results[min + ',' + max].push(course1);
      }
    }
  }

  console.log('Results: ', results);
}

findSimilarCourses(studentCourseArr);
