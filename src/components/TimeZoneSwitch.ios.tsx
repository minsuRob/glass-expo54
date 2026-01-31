import { useReactConfStore } from "@/store/reactConfStore";
import { getCurrentTimezone } from "@/utils/formatDate";
import * as Haptics from "expo-haptics";
import { theme } from "@/theme";
import { StyleSheet } from "react-native";
import { ThemedPressable, ThemedText } from "./Themed";

export function TimeZoneSwitch() {
  const shouldUseLocalTz = useReactConfStore((state) => state.shouldUseLocalTz);
  const toggleLocalTz = useReactConfStore((state) => state.toggleLocalTz);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    toggleLocalTz();
  };

  return (
    <ThemedPressable
      style={styles.fallbackContainer}
      onPress={handlePress}
      backgroundColor={theme.color.backgroundSecondary}
    >
      <ThemedText fontSize={theme.fontSize12} fontWeight="semiBold">
        {shouldUseLocalTz ? getCurrentTimezone() : "PDT"}
      </ThemedText>
    </ThemedPressable>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    alignSelf: "flex-end",
    borderRadius: theme.borderRadius40,
    height: 32,
    justifyContent: "center",
    paddingHorizontal: theme.space16,
  },
});
