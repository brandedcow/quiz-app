import { ExpandableQuestion } from "@/components/ExpandableQuestion";
import { Title } from "@/components/Title";
import { useQuizStore } from "@/store/useQuizStore";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import uuid from "react-native-uuid";

export default function QuizResults() {
  const { results, clearResults } = useQuizStore();

  const score = results.filter((e) => e.isCorrect).length;

  const handleResetPress = () => {
    clearResults();
    router.dismissAll();
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingHorizontal: 24 }}
      edges={["top", "bottom"]}
    >
      <Title>Quiz Results</Title>
      <Text>
        Score: {score} / {results.length}
      </Text>
      <View style={styles.container}>
        <ScrollView>
          {results.map(
            ({
              question,
              isCorrect,
              options,
              correctAnswers,
              selectedAnswer,
            }) => (
              <ExpandableQuestion
                key={uuid.v4().toString()}
                question={question}
                isCorrect={isCorrect}
                options={options}
                correctAnswers={correctAnswers}
                selectedAnswer={selectedAnswer}
              />
            )
          )}
        </ScrollView>
        <Pressable style={styles.button} onPress={handleResetPress}>
          <Text>Reset Quiz</Text>
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
    marginTop: 12,
  },
  container: { flex: 1, justifyContent: "space-between" },
  result: {
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  correct: {
    backgroundColor: "green",
  },
  wrong: {
    backgroundColor: "orange",
  },
});
