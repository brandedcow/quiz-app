import axios from "axios";

import { type CategoryResponse } from "./api";

export class QuizAPI {
  private readonly apiKey: string;
  private readonly baseURL: string;

  constructor(key?: string, baseURL?: string) {
    if (!key || !baseURL) {
      console.warn({ key, baseURL });
      throw new Error("Missing env vars");
    }

    this.apiKey = key;
    this.baseURL = baseURL;
  }

  async getCategories() {
    const requestString = await this._generateRequestURL(
      this.baseURL,
      "categories"
    );

    try {
      const response = await axios.get<CategoryResponse>(requestString, {
        timeout: 10000,
      });
      return response.data;
    } catch (error) {
      console.log({ error });
      throw new Error("Geocode API Request error");
    }
  }

  private async _generateRequestURL<T extends Record<string, unknown>>(
    base: string,
    endpoint: string,
    options?: T
  ) {
    let requestString = `${base}/${endpoint}`;

    requestString += `?`;

    for (const property in options) {
      if (
        typeof options[property] === "string" ||
        typeof options[property] === "number"
      ) {
        requestString += `${property}=${options[property]}&`;
      } else if (Array.isArray(options[property])) {
        let propertyString = `${property}=`;
        for (const subString of options[property] as string[]) {
          if (subString) {
            propertyString += `${subString},`;
          }
        }

        propertyString = propertyString.slice(0, -1);

        requestString += propertyString;
      }
    }

    requestString += `&apiKey=${this.apiKey}`;
    return requestString;
  }
}

const { EXPO_PUBLIC_QUIZ_API_KEY, EXPO_PUBLIC_QUIZ_BASE_URL } = process.env;

export const API = new QuizAPI(
  EXPO_PUBLIC_QUIZ_API_KEY,
  EXPO_PUBLIC_QUIZ_BASE_URL
);
