import { sample_results } from "@/data/sample-results";
import { create } from "zustand";

export type Option = {
  key: string;
  value: string;
};

export type Answer = { [key: string]: string };

type QuizChoice = {
  question: string;
  isCorrect: boolean;
  selectedAnswer: Answer;
  correctAnswers: Answer;
  options: Option[];
};

type QuizResult = QuizChoice[];

type QuizStoreSchema = {
  selectedCategory?: string;
  setSelectedCategory: (selectedCategory: string) => void;

  currentQuestion: number;
  incrementCurrentQuestion: () => void;
  setCurrentQuestion: (currentQuestion: number) => void;

  results: QuizResult;
  addChoice: (answer: QuizChoice) => void;
  clearResults: () => void;
};

export const useQuizStore = create<QuizStoreSchema>((set) => ({
  selectedCategory: undefined,
  setSelectedCategory: (selectedCategory) =>
    set((state) => ({ ...state, selectedCategory })),

  currentQuestion: 0,
  incrementCurrentQuestion: () =>
    set((state) => ({ ...state, currentQuestion: state.currentQuestion + 1 })),
  setCurrentQuestion: (currentQuestion) =>
    set((state) => ({ ...state, currentQuestion })),

  results: [],
  addChoice: (answer) =>
    set((state) => ({ ...state, results: [...state.results, answer] })),
  clearResults: () =>
    set((state) => ({ ...state, currentQuestion: 0, results: [] })),
}));
