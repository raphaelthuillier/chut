type Offer = { id: string; merchantId: string; title: string; rateType: "percent"|"flat"; rateValue: number; deeplinkTemplate: string; logoUrl: string; terms?: string; };
type Merchant = { id: string; name: string; logoUrl: string };
export const merchants: Merchant[] = [
  { id: "HELLOFRESH", name: "HelloFresh", logoUrl: "https://logo.clearbit.com/hellofresh.com" },
  { id: "DYSON", name: "Dyson", logoUrl: "https://logo.clearbit.com/dyson.com" }
];
export const offers: Offer[] = [
  { id: "offer_hello", merchantId: "HELLOFRESH", title: "Jusqu’à 25€ remboursés", rateType: "flat", rateValue: 25, deeplinkTemplate: "https://redir.ebuyclub.com/?mid=HELLOFRESH&subid={userId}&url={encodedUrl}", logoUrl: merchants[0].logoUrl },
  { id: "offer_dyson", merchantId: "DYSON", title: "2% remboursés au lieu de 0,3%", rateType: "percent", rateValue: 2, deeplinkTemplate: "https://redir.ebuyclub.com/?mid=DYSON&subid={userId}&url={encodedUrl}", logoUrl: merchants[1].logoUrl }
];
export function buildAffiliateLink(userId: string, deeplinkTemplate: string, productUrl: string) {
  const encodedUrl = encodeURIComponent(productUrl);
  return deeplinkTemplate.replace("{userId}", encodeURIComponent(userId)).replace("{encodedUrl}", encodedUrl);
}
