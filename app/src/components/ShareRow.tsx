import * as Clipboard from "expo-clipboard";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../theme";
export function ShareRow({ url }: { url: string }) {
  return (
    <View style={s.row}>
      <Text numberOfLines={1} style={s.url}>{url}</Text>
      <TouchableOpacity onPress={() => Clipboard.setStringAsync(url)}>
        <Text style={s.copy}>Copier</Text>
      </TouchableOpacity>
    </View>
  );
}
const s = StyleSheet.create({ row: { backgroundColor: theme.colors.card, borderRadius: theme.radius, padding: 12, borderWidth: 1, borderColor: theme.colors.border, flexDirection: "row", alignItems: "center", gap: 12 }, url: { flex: 1, color: theme.colors.text }, copy: { color: theme.colors.primary, fontWeight: "700" } });
