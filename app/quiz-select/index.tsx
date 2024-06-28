import { QuizCategoryCard } from "@/components/QuizCategoryCard";
import { Title } from "@/components/Title";
import { getCategories } from "@/data/api";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export { ErrorBoundary } from "expo-router";

export default function QuizSelect() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isPending) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (data === undefined || isError) {
    throw new Error("No Data");
  }

  return (
    <View style={styles.buttonContainer}>
      {data.map(({ id, name }) => (
        <QuizCategoryCard key={id} label={name} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
});
