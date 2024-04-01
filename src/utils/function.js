export function calculerAge(annee, mois) {
    const dateActuelle = new Date();
    const anneeActuelle = dateActuelle.getFullYear();
    const moisActuel = dateActuelle.getMonth() + 1;
    const moisDeNaissance = mois;

    let age = anneeActuelle - annee;

    if (moisActuel < moisDeNaissance) {
        age--;
    }
    return age;
}

// export function useIntersectionObserver(callback, options) {
//     const elementRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(callback, options);

//         if (elementRef.current) {
//             observer.observe(elementRef.current);
//         }

//         return () => {
//             if (elementRef.current) {
//                 observer.unobserve(elementRef.current);
//             }
//         };
//     }, [callback, options]);

//     return elementRef;
// }