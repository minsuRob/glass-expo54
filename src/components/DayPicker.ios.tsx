import { theme } from "@/theme";
import { StyleSheet, View, Pressable } from "react-native";
import { ConferenceDay } from "@/consts";
import { ThemedText, useThemeColor } from "./Themed";

interface DayPickerProps {
  selectedDay: ConferenceDay;
  onSelectDay: (day: ConferenceDay) => void;
}

function DayPickerFallback({
  selectedDay,
  onSelectDay,
}: DayPickerProps) {
  const backgroundColor = useThemeColor(theme.color.backgroundElement);
  const selectedBackgroundColor = useThemeColor(theme.color.reactBlue);

  return (
    <View
      style={[
        styles.glassView,
        { backgroundColor },
      ]}
    >
      <View style={styles.segmentRow}>
        <Pressable
          style={[
            styles.segment,
            selectedDay === ConferenceDay.One && {
              backgroundColor: selectedBackgroundColor,
            },
          ]}
          onPress={() => onSelectDay(ConferenceDay.One)}
        >
          <ThemedText
            fontSize={theme.fontSize14}
            fontWeight={selectedDay === ConferenceDay.One ? "semiBold" : "medium"}
            color={selectedDay === ConferenceDay.One ? theme.color.reactBlue : theme.color.textSecondary}
          >
            Day 1
          </ThemedText>
        </Pressable>
        <Pressable
          style={[
            styles.segment,
            selectedDay === ConferenceDay.Two && {
              backgroundColor: selectedBackgroundColor,
            },
          ]}
          onPress={() => onSelectDay(ConferenceDay.Two)}
        >
          <ThemedText
            fontSize={theme.fontSize14}
            fontWeight={selectedDay === ConferenceDay.Two ? "semiBold" : "medium"}
            color={selectedDay === ConferenceDay.Two ? theme.color.reactBlue : theme.color.textSecondary}
          >
            Day 2
          </ThemedText>
        </Pressable>
      </View>
    </View>
  );
}

export function DayPicker({ selectedDay, onSelectDay }: DayPickerProps) {
  return (
    <View style={{ paddingBottom: theme.space24 }}>
      <DayPickerFallback selectedDay={selectedDay} onSelectDay={onSelectDay} />
    </View>
  );
}

const styles = StyleSheet.create({
  glassView: {
    borderRadius: theme.borderRadius80,
    height: 32,
    marginHorizontal: theme.space16,
    marginTop: theme.space16,
    width: "auto",
  },
  segmentRow: {
    flexDirection: "row",
    borderRadius: theme.borderRadius80,
    overflow: "hidden",
  },
  segment: {
    flex: 1,
    paddingVertical: theme.space8,
    alignItems: "center",
    justifyContent: "center",
  },
});
