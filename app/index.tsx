import { Title } from "@/components/Title";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export { ErrorBoundary } from "expo-router";

export default function Welcome() {
  const handlePress = () => {
    router.push("quiz-select");
  };

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom", "top"]}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Title>Quiz App</Title>

        <Pressable style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonLabel}>Start Quiz</Text>
        </Pressable>

        <View style={styles.footer}>
          <Pressable>
            <Text>Settings</Text>
          </Pressable>
          <Pressable>
            <Text>Help</Text>
          </Pressable>
        </View>
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
    backgroundColor: "green",
  },
  buttonLabel: {
    fontSize: 30,
    color: "white",
  },
  footer: {
    flexDirection: "row",
    gap: 50,
  },
});
