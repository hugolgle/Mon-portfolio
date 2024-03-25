import './aboutSection.scss';

export default function AboutSection() {

    return (
        <section id='about' className="section about">
            <h1>Présentation</h1>
            <div className="containerAbout">
                <img src="../public/images/portrait.png" alt="" srcset="" />
                <div className="containerText">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure labore, tenetur ullam blanditiis eveniet veritatis quasi tempora pariatur rerum consequatur ratione, ipsum doloribus placeat! Blanditiis ipsam asperiores inventore suscipit, debitis molestiae corrupti dignissimos non laborum saepe, sed, architecto harum dolor fuga iusto consectetur libero voluptates accusamus laboriosam magnam placeat. Dolores!</p>
                </div>
            </div>
        </section>
    );
}