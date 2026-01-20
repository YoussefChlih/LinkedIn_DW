# Data Profiling - Profils LinkedIn

## Colonnes directement utilisables
- Full name → split Prénom/Nom
- Location → normaliser (Rabat, Fès, Casablanca)
- Birthday → calculer âge
- Organization 1-7 → histoire professionnelle
- Education 1-3 → formations

## Anomalies détectées
- Dates format varié : "févr. 2016", "2016", "Aujourd'hui"
- Skills format : "Java : 2, PHP : 6" → parser requis
- Données manquantes : 40% des profils n'ont pas Organization 3+