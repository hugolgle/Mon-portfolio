import './homeSection.scss';

export default function HomeSection() {


    return (
        <section id='home' className="section home">
            <img src="../public/images/imgHome.jpg" alt="" srcset="" />
            <div className="containerLeft">
                <img src="../public/images/memoji.png" alt="" srcset="" />
                <h1>Étudiant de 21 ans</h1>
                <hr />
                <p>Développeur web</p>
            </div>
        </section>
    );
}