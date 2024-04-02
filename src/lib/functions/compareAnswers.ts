import { UserAnswers, QuestionData } from "./types";

interface AnswerComparison {
  questionIndex: number;
  correctAnswer: string;
  correctAnswerOptionIndex: number;
  userAnswer: string;
  userAnswerOptionIndex: number;
  isCorrect: boolean;
}

interface ComparisonResult {
  answerComparisons: AnswerComparison[];
  correctCount: number;
}

const compareAnswers = (
  userAnswers: UserAnswers | null | undefined,
  questionsData: QuestionData | null | undefined
): ComparisonResult => {
  const answerComparisons: AnswerComparison[] = [];
  let correctCount: number = 0;

  if (!userAnswers || !questionsData) {
    console.error("User answers or questions data is null or undefined");
    return { answerComparisons, correctCount };
  }

  Object.keys(questionsData).forEach((questionIndexStr) => {
    const questionIndex: number = parseInt(questionIndexStr);
    const questionData = questionsData[questionIndexStr];
    const correctAnswer: string = questionData.correctAnswer;
    const options: string[] = questionData.options;

    const correctAnswerOptionIndex: number = options.indexOf(correctAnswer) + 1; // Adding 1 to indicate the position

    const userAnswer: string = userAnswers[questionIndexStr] ?? "";

    const userAnswerOptionIndex: number = options.indexOf(userAnswer) + 1; // Adding 1 to indicate the position

    const isCorrect: boolean = userAnswer === correctAnswer;

    if (isCorrect) {
      correctCount++; // Increment correctCount if the answer is correct
    }

    answerComparisons.push({
      questionIndex,
      correctAnswer,
      correctAnswerOptionIndex,
      userAnswer,
      userAnswerOptionIndex,
      isCorrect,
    });
  });

  return { answerComparisons, correctCount };
};

export default compareAnswers;
