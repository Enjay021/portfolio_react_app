export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I'm Neljayson
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--setion--title--color">
                            Front-end
                        </span> {" "}<br />
                        Web Developer
                    </h1>
                    <p className="hero--section--description">
                        Let me build you a user-friendly and modern eye-catchy website for your business!
                    </p>
                </div>
                <button className="btn btn-primary">
                    Hire Me
                </button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
}