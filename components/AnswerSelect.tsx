import { Answer, useQuizStore } from "@/store/useQuizStore";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  options: [string, string][];
  onChange?: (answer: Answer) => void;
  isMultiSelect?: boolean;
};

export function AnswerSelect({
  options,
  onChange,
  isMultiSelect = false,
}: Props) {
  const [selected, setSelected] = useState<{} | null>(
    isMultiSelect ? [] : null
  );
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const { currentQuestion } = useQuizStore();

  const handlePress = ({ index }: { index: number }) => {
    if (isMultiSelect && isSelected(index)) {
      setSelectedIndices((prevState) =>
        prevState.filter((ele: number) => ele !== index)
      );
    } else {
      setSelectedIndices(isMultiSelect ? [...selectedIndices, index] : [index]);
    }

    if (onChange) {
      const selectedAnswers = options.reduce((acc, [key], idx) => {
        return {
          ...acc,
          [`${key}_correct`]: idx === index ? "true" : "false",
        };
      }, {});

      onChange(selectedAnswers);
    }
  };

  useEffect(() => {
    setSelectedIndices([]);
  }, [currentQuestion]);

  useEffect(() => {
    setSelected(isMultiSelect ? [] : null);
  }, [isMultiSelect]);

  const isSelected = (index: number) => selectedIndices.includes(index);

  return (
    <View style={styles.container}>
      {options.map(
        ([key, value], index) =>
          value && (
            <Pressable key={key} onPress={() => handlePress({ index })}>
              <View
                style={[styles.button, isSelected(index) && styles.selected]}
              >
                <Text style={[isSelected(index) && styles.selectedText]}>
                  {value}
                </Text>
              </View>
            </Pressable>
          )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "beige",
  },
  container: {
    gap: 12,
  },
  selected: {
    backgroundColor: "brown",
  },
  selectedText: {
    color: "white",
    fontWeight: "bold",
  },
});
