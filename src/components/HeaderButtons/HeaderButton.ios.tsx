import type { ButtonProps, ImageProps } from "@expo/ui/swift-ui";
import { theme } from "@/theme";
import { StyleProp, ViewStyle } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Pressable } from "react-native-gesture-handler";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const SIZE = theme.fontSize34;

export interface HeaderButtonProps {
  imageProps?: ImageProps;
  buttonProps?: ButtonProps;
  style?: StyleProp<ViewStyle>;
}

function HeaderButtonFallback({
  imageProps,
  buttonProps,
}: HeaderButtonProps) {
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <AnimatedPressable
      hitSlop={20}
      onPress={buttonProps?.onPress}
      onPressIn={() => {
        scale.value = withTiming(0.8);
      }}
      onPressOut={() => {
        scale.value = withTiming(1);
      }}
      style={animatedStyle}
    >
      <MaterialCommunityIcons
        name={(imageProps?.systemName as string) || "cross"}
        size={imageProps?.size ?? theme.fontSize24}
        color={theme.colorGrey}
      />
    </AnimatedPressable>
  );
}

export function HeaderButton({
  imageProps,
  buttonProps,
  style,
}: HeaderButtonProps) {
  return (
    <HeaderButtonFallback
      imageProps={imageProps}
      buttonProps={buttonProps}
      style={style}
    />
  );
}
