import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
};

export function Title({ label }: Props) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 16,
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
