import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../theme";
export function OfferCard({ logoUrl, title, subtitle, onPress }: { logoUrl: string; title: string; subtitle?: string; onPress: () => void; }) {
  return (
    <TouchableOpacity onPress={onPress} style={s.card}>
      <Image source={{ uri: logoUrl }} style={s.logo} />
      <View style={{ flex: 1 }}>
        <Text style={s.title}>{title}</Text>
        {subtitle ? <Text style={s.sub}>{subtitle}</Text> : null}
      </View>
      <Text style={s.cta}>Voir</Text>
    </TouchableOpacity>
  );
}
const s = StyleSheet.create({ card: { backgroundColor: theme.colors.card, borderRadius: theme.radius, padding: 14, flexDirection: "row", gap: 12, alignItems: "center", borderWidth: 1, borderColor: theme.colors.border }, logo: { width: 42, height: 42, borderRadius: 8 }, title: { color: theme.colors.text, fontSize: 16, fontWeight: "600" }, sub: { color: theme.colors.muted, fontSize: 12, marginTop: 2 }, cta: { color: theme.colors.primary, fontWeight: "700" } });
