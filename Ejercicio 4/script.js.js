let student1Courses = ['baile', 'canto', 'ingles'];
let student2Courses = ['musica', 'ingles', 'natacion'];

function findCommonCourses(student1Courses, student2Courses) {
  let commonCourses = [];

  for (let course1 of student1Courses) {
    for (let course2 of student2Courses) {
      if (course1 === course2) {
        commonCourses.push(course1);
      }
    }
  }

  if (commonCourses.length > 0) {
    console.log('Common courses:');
    for (let course of commonCourses) {
      console.log(course);
    }
  } else {
    console.log('No common courses found.');
  }
}

findCommonCourses(student1Courses, student2Courses)
