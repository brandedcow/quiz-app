import axios from "axios";
import {
  QuestionRequestOptions,
  QuestionsResponse,
  type CategoryResponse,
} from "./api-types";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_QUIZ_BASE_URL,
  timeout: 5000,
  params: {
    apiKey: process.env.EXPO_PUBLIC_QUIZ_API_KEY,
  },
});

export async function getCategories() {
  try {
    const { data } = await api.get<CategoryResponse>("categories");
    return data;
  } catch (error) {
    throw new Error("Error getting categories");
  }
}

export async function getQuestions(params: QuestionRequestOptions) {
  try {
    const { data } = await api.get<QuestionsResponse>("questions", {
      params: {
        ...params,
        limit: 5,
      },
    });
    return data;
  } catch (error) {
    throw new Error("Error getting questions");
  }
}
