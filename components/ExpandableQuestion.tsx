import { Answer } from "@/store/useQuizStore";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import uuid from "react-native-uuid";

type Props = {
  question: string;
  options: Answer[];
  isCorrect: boolean;
  correctAnswers: Answer;
  selectedAnswer: Answer;
};

export function ExpandableQuestion({
  question,
  options,
  isCorrect,
  correctAnswers,
  selectedAnswer,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Pressable
      key={uuid.v4().toString()}
      onPress={() => setIsOpen((state) => !state)}
    >
      <View style={[styles.result, isCorrect ? styles.correct : styles.wrong]}>
        <Text>{question}</Text>
      </View>
      <View style={styles.answerContainer}>
        {isOpen &&
          options.map(({ key, value }) => {
            const keyString = `${key}_correct`;

            return (
              value && (
                <View
                  key={key}
                  style={[
                    styles.answer,
                    correctAnswers[keyString].toLowerCase() === "true" &&
                      styles.correctAnswer,
                    !isCorrect &&
                      selectedAnswer[keyString].toLowerCase() === "true" &&
                      styles.wrongAnswer,
                  ]}
                >
                  <Text>{value}</Text>
                </View>
              )
            );
          })}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  answer: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  answerContainer: {
    paddingLeft: 24,
  },
  result: {
    borderTopWidth: 1,
    borderColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
  correct: {
    backgroundColor: "limegreen",
  },
  wrong: {
    backgroundColor: "orangered",
  },
  correctAnswer: {
    backgroundColor: "lawngreen",
  },
  wrongAnswer: {
    backgroundColor: "orange",
  },
});
