import { API } from "@/data/quiz-api";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Text, View } from "react-native";

export default function QuizSelect() {
  const { isPending, isError, data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => API.getCategories(),
  });

  if (data === undefined || isError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  if (isPending) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>Quiz Select</Text>
      {data.map(({ name }) => (
        <Text>{name}</Text>
      ))}
    </View>
  );
}
