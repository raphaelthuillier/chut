# Chut
Application mobile de micro-recommandations rémunérées, basée sur l’API pour le tracking, la cagnotte et les réclamations.
## Démarrage
cd app && npm i && npm run start
## Lien affilié
Construction locale via `buildAffiliateLink(userId, template, productUrl)` puis redirection eBuyClub. À sécuriser via un backend (Edge Function) dès réception des accès partenaires.
## Prochaines étapes
• Authentification (Apple/Google + email) • Connexion  (offres, transactions, réclamations) • Redirections courtes r.chut.app/xxxx • Page Cagnotte réelle
