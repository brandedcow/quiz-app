import { PropsWithChildren } from "react";
import { Text, View } from "react-native";

type Props = PropsWithChildren;

export function Title({ children }: Props) {
  return (
    <View
      style={{
        paddingHorizontal: 24,
        paddingVertical: 16,
      }}
    >
      {typeof children === "string" ? (
        <Text
          style={{
            fontSize: 30,
          }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
}
