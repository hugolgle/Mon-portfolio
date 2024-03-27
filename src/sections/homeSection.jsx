import './homeSection.scss';

import calculerAge from '../utils/function';

export default function HomeSection() {
    const age = calculerAge(2002)
    return (
        <section id='home' className="section home">
            <img src="../public/images/imgHome.jpg" alt="" srcset="" />
            <div className="containerLeft">
                <img src="../public/images/memoji.png" alt="" srcset="" />
                <h1>Étudiant de {age} ans</h1>
                <hr />
                <p>Développeur web</p>
            </div>
        </section>
    );
}