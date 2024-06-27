import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  id: number;
  label: string;
};

export function QuizCategoryCard({ label }: Props) {
  return (
    <Pressable style={styles.button}>
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
