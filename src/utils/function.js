export default function calculerAge(annee, mois) {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    const moisActuel = dateActuelle.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    const moisDeNaissance = mois;

    let age = anneeActuelle - annee;

    if (moisActuel < moisDeNaissance) {
        age--;
    }

    return age;
}