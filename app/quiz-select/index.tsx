import { QuizCategoryCard } from "@/components/QuizCategoryCard";
import { Title } from "@/components/Title";
import { API } from "@/data/quiz-api";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function QuizSelect() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => API.getCategories(),
  });

  if (isPending) {
    return <ActivityIndicator size="large" />;
  }

  if (data === undefined || isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View>
      <Title label="Category Select" />

      <View style={styles.buttonContainer}>
        {data.map(({ id, name }) => (
          <QuizCategoryCard key={id} id={id} label={name} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    gap: 12,
    paddingHorizontal: 24,
  },
});
