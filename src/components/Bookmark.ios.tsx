import { Session } from "@/types";
import { StyleProp, ViewStyle } from "react-native";
import { BaseBookmark } from "./BaseBookmark";

type BookmarkProps = {
  session: Session;
  size?: "small" | "large";
  style?: StyleProp<ViewStyle>;
};

export function Bookmark(props: BookmarkProps) {
  return <BaseBookmark {...props} />;
}
