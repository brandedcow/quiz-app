export type CategoryResponse = {
  id: number;
  name: string;
}[];

export type QuestionRequestOptions = {
  limit?: number;
  category?: string;
  difficulty?: string;
};

type Question = {
  id: number;
  question: string;
  description: string;
  answers: {
    [key: string]: string;
  };
  multiple_correct_answers: string;
  correct_answers: {
    [key: string]: string;
  };
  explanation: string;
  tip: string | null;
  tags: string[];
  category: string;
  difficulty: string;
};

export type QuestionsResponse = Question[];
