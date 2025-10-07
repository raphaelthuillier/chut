import { View, Text, ScrollView, StyleSheet } from "react-native";
import { offers } from "../api/ebuy";
import { OfferCard } from "../components/OfferCard";
import { router } from "expo-router";
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={s.wrap}>
      <Text style={s.h1}>Chut • Offres du moment</Text>
      {offers.map(o => (
        <OfferCard key={o.id} logoUrl={o.logoUrl} title={o.title} subtitle={o.merchantId} onPress={() => router.push({ pathname: "/offer", params: { id: o.id } })} />
      ))}
    </ScrollView>
  );
}
const s = StyleSheet.create({ wrap: { padding: 16, gap: 12, backgroundColor: "#F9F7F5", minHeight: "100%" }, h1: { fontSize: 22, fontWeight: "800" } });
