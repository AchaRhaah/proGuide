interface AnswerComparison {
  questionIndex: number;
  question: string; // Changed from questionText
  correctAnswer: string;
  correctAnswerOptionIndex: number;
  userAnswer: string;
  userAnswerOptionIndex: number;
  isCorrect: boolean;
  explanation?: string;
}

export interface ComparisonResult {
  answerComparisons: AnswerComparison[];
  correctCount: number;
  totalAnsweredQuestions: number;
}

const compareAnswers = (
  userAnswers: any | null | undefined,
  questionsData: any | null | undefined
): ComparisonResult => {
  const answerComparisons: AnswerComparison[] = [];
  let correctCount: number = 0;
  let totalAnsweredQuestions: number = 0;

  if (!userAnswers || !questionsData) {
    console.error("User answers or questions data is null or undefined");
    return { answerComparisons, correctCount, totalAnsweredQuestions };
  }

  Object.keys(questionsData).forEach((questionIndexStr) => {
    const questionIndex: number = parseInt(questionIndexStr);
    const questionData = questionsData[questionIndexStr];
    const correctAnswer: string = questionData.correctAnswer;
    const options: string[] = questionData.options;
    const explanation: string | undefined = questionData.explanation;
    const question: string = questionData.question; // Changed to use question property

    const correctAnswerOptionIndex: number = options.indexOf(correctAnswer) + 1;

    const userAnswer: string = userAnswers[questionIndexStr] ?? "";
    const userAnswerOptionIndex: number = userAnswer
      ? options.indexOf(userAnswer) + 1
      : 0;
    const isCorrect: boolean = userAnswer === correctAnswer;

    if (isCorrect) {
      correctCount++;
    }

    if (userAnswer !== "") {
      totalAnsweredQuestions++;
    }

    const comparison: AnswerComparison = {
      questionIndex,
      question,
      correctAnswer,
      correctAnswerOptionIndex,
      userAnswer,
      userAnswerOptionIndex,
      isCorrect,
    };

    if (!isCorrect && explanation) {
      comparison.explanation = explanation;
    }

    answerComparisons.push(comparison);
  });

  return { answerComparisons, correctCount, totalAnsweredQuestions };
};

export default compareAnswers;
