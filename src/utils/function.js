export default function calculerAge(annee) {
    const anneeActuelle = new Date().getFullYear();
    const anneeDeNaissance = annee;
    const age = anneeActuelle - anneeDeNaissance;
    return age;
}