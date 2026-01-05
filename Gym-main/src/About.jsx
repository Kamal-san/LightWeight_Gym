import abt from "./img/about/abt.jpg"
import abt2 from "./img/about/abt2.jpg"
import Quick from "./Quick";

function About()
{
    return(
    <div className="abt">
           

        <div className="abtimg">
            <img src={abt} alt="" />
            <div className="abttxt">
                <p>About Us</p>

            </div>
        </div>
        <div className="acon">
            <div className="acol1">
                <h2 className="headbc">
                    Our Story
                </h2>
                <p>LightWeight Gym aims to bring ‘next generation fitness’ with top-notch specialized workout facilities and training programs for all members. 
                    Located in Arcot, our gym offers progressive physical training and resistance formats. 
                    Our gym is known for possessing state-of-the-art equipment and an expansive floor for a wide
                    assortment of specialized training programs offered by industry trainers and professionals.</p>
                <br />
                <p>LightWeight Gym, widely regarded as one of Arcot’s premium fitness destinations, is more than just a gym; 
                    it’s a way of life. 
                    The vision and mission of our venture are to provide the best fitness experience possible under the supervision of highly qualified and experienced professionals. 
                    We meet the demand for an upscale gym in the growing suburb of Ranipet and surrounding areas.

</p>
            
            </div>
            <div className="acol2">
                <img src={abt2} alt="" />
            </div>
        </div>
        <div className="acon2">
            <p>Our strategic location means that LightWeight Gym is easily accessible to the working population.
                 As one of the best gyms in Arcot, we aim to offer a effective range of services: Functional training, fitness Bootcamp, body transformation, weight loss, and weight gain.</p>
            <p>Our fitness team possesses exceptional talent, creativity, and genuine professionalism. 
                Being the best gym in Arcot, we have an experienced team with great reputation with our members, prioritizes their needs, and is with them every step to reach their fitness goals.</p>
        </div>
        <Quick/>
    </div>
    );
}
export default About