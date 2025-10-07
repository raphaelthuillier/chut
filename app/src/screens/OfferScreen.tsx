import { useLocalSearchParams } from "expo-router";
import { offers, buildAffiliateLink } from "../api/ebuy";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { ShareRow } from "../components/ShareRow";
import { useState, useMemo } from "react";
const USER_ID = "user_demo_123"; // remplacer par l’auth réelle
export default function OfferScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const offer = offers.find(o => o.id === id)!;
  const [productUrl, setProductUrl] = useState("https://www.hellofresh.fr/plans");
  const affiliateUrl = useMemo(() => buildAffiliateLink(USER_ID, offer.deeplinkTemplate, productUrl), [productUrl, offer]);
  return (
    <View style={{ padding: 16, gap: 12 }}>
      <Text style={s.h1}>{offer.title}</Text>
      <Text style={s.label}>Colle l’URL exacte de la page produit</Text>
      <TextInput style={s.input} value={productUrl} onChangeText={setProductUrl} autoCapitalize="none" />
      <Text style={s.label}>Ton lien Chut à partager</Text>
      <ShareRow url={affiliateUrl} />
      <Text style={s.note}>Lien traçable via eBuyClub (subID utilisateur inclus).</Text>
    </View>
  );
}
const s = StyleSheet.create({ h1: { fontSize: 20, fontWeight: "700" }, label: { fontWeight: "600" }, input: { borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 12, padding: 12 }, note: { color: "#6B7280", fontSize: 12 } });
