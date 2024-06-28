import { AnswerSelect } from "@/components/AnswerSelect";
import { Title } from "@/components/Title";
import { getQuestions } from "@/data/api";
import { Answer, useQuizStore } from "@/store/useQuizStore";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Quiz() {
  const {
    selectedCategory,
    currentQuestion,
    incrementCurrentQuestion,
    addChoice,
    clearResults,
  } = useQuizStore();

  const [selectedAnswer, setSelectedAnswer] = useState<Answer | null>(null);

  const { data, isError, isPending } = useQuery({
    queryKey: ["questions", selectedCategory],
    queryFn: () => getQuestions({ category: selectedCategory }),
  });

  useEffect(() => {
    clearResults();
  }, []);

  if (isPending) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!data || isError) {
    throw new Error("No Quiz Data");
  }

  if (data[currentQuestion] === undefined) {
    router.push("quiz-results");
    return null;
  }

  const { question, answers, multiple_correct_answers, correct_answers } =
    data[currentQuestion];

  const selectOptions = Object.entries(answers);

  const handleNextPress = () => {
    if (!selectedAnswer) return;

    const isCorrect =
      JSON.stringify(selectedAnswer) === JSON.stringify(correct_answers);

    addChoice({
      question,
      isCorrect,
      selectedAnswer,
      correctAnswers: correct_answers,
      options: selectOptions.map(([key, value]) => ({ key, value })),
    });

    incrementCurrentQuestion();
  };

  const progress = `${currentQuestion} / ${data.length}`;

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["top", "bottom"]}>
      <Title>
        <Text>Quiz {progress}</Text>
      </Title>

      <View style={styles.container}>
        <View>
          <View style={{ paddingBottom: 12 }}>
            <Text>{question}?</Text>
          </View>

          <AnswerSelect
            options={selectOptions}
            onChange={setSelectedAnswer}
            isMultiSelect={multiple_correct_answers.toLowerCase() === "true"}
          />
        </View>

        <Pressable style={styles.button} onPress={handleNextPress}>
          <Text>Next</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "orange",
    marginTop: 24,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
});
