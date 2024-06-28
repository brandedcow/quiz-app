import { useQuizStore } from "@/store/useQuizStore";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  label: string;
};

export function QuizCategoryCard({ label }: Props) {
  const { setSelectedCategory } = useQuizStore();

  const handlePress = () => {
    setSelectedCategory(label);
    router.push("quiz");
  };

  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "yellow",
  },
});
