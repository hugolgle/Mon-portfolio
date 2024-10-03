const mois = {
  Janvier: 0,
  Février: 1,
  Mars: 2,
  Avril: 3,
  Mai: 4,
  Juin: 5,
  Juillet: 6,
  Août: 7,
  Septembre: 8,
  Octobre: 9,
  Novembre: 10,
  Décembre: 11,
};

export function calculerAge(annee, mois) {
  const dateActuelle = new Date();
  const anneeActuelle = dateActuelle.getFullYear();
  const moisActuel = dateActuelle.getMonth() + 1;
  let age = anneeActuelle - annee;
  if (moisActuel < mois) {
    age--;
  }
  return age;
}

export const parseDate = (dateStr) => {
  const [moisNom, annee] = dateStr.split(" ");
  return new Date(annee, mois[moisNom]);
};
