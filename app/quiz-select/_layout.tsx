import { Slot, Stack } from "expo-router";

export default function QuizSelectLayout() {
  return (
    <>
      <Stack.Screen options={{ title: "Select Quiz Category" }} />
      <Slot />
    </>
  );
}
