import './homeSection.scss';

export default function HomeSection() {


    return (
        <section id='home' className="section home">
            <img src="../public/images/imgHome.jpg" alt="" srcset="" />
            <div className="containerLeft">
                <img src="../public/images/memoji.png" alt="" srcset="" />
                <h1>Bonjour, je m'appelle Hugo !</h1>
                <p>Je suis curieux !</p>
            </div>
        </section>
    );
}