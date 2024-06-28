import { Slot, Stack } from "expo-router";

export default function QuizResultsLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Slot />
    </>
  );
}
