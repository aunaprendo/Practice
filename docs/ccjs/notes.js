function getGrade(score) {
	if (score === 100) {
		return "A+";
	} else if (90<= score <=99) {
		return "A";
	} else if (80<= score <=89) {
		return "B";
	} else if (70<= score <=79) {
		return "C";
	} else if (60<= score <=69) {
		return "D";
	} else {
		return "F";
	}
}





You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:

"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.
