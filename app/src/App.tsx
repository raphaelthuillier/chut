import { Stack } from "expo-router";
export default function AppLayout(){ return (<Stack screenOptions={{ headerShown: true }}><Stack.Screen name="index" options={{ title: "Chut" }} /><Stack.Screen name="offer" options={{ title: "Créer un lien" }} /><Stack.Screen name="wallet" options={{ title: "Cagnotte" }} /></Stack>); }
