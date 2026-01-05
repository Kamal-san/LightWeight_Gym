import home1 from "./img/home1.jpg";
import home2 from "./img/home2.jpg";
import one from "./img/one.jpg";
import two from "./img/two.jpg";
import three from "./img/3.jpg";
import four from "./img/4.jpg";
import Quick from "./Quick";
import { Link } from "react-router-dom";


function Home() {
    return (
        <div className="home">
            
            
            <div className="home1">
                <img src={home1} alt="" />
              
            </div>
            <div className="container">
            <div className="col1">
                <img src={home2} alt="Home Image 2" id="homeimg2" />
            </div>
            <div className="col2">
                <p className="about">
                    <span id="welcome">Welcome to <span id="gymname">LightWeight</span> Gym</span>
                    <br /><br />
                    <br /> where fitness meets community and excellence. Whether you are a seasoned athlete or just beginning your fitness journey, we are thrilled to have you here.

                    At <span id="gymname">LightWeight</span> Gym, we pride ourselves on providing a state-of-the-art facility that caters to all your fitness needs. Our gym is equipped with the latest in fitness technology, from cutting-edge cardio machines to top-of-the-line strength training equipment. Whatever your fitness goals, we have the tools and resources to help you achieve them.
                    <br />
                    <br />
                    <span className="abt2">What Sets Us Apart:</span>
                    
                    <br />
                    <br />
                
                    Expert Guidance: Our team of experienced and certified trainers is here to support you every step of the way.
                     They will work with you to create personalized workout plans and provide the motivation you need to succeed.
                    <br />
                    <br />
                    Diverse Classes: Explore a variety of fitness classes designed to challenge and inspire you.
                     Whether you prefer high-intensity workouts like HIIT or the mindfulness of yoga,
                      our classes cater to all interests and fitness levels.
                     <br />
                     <br />
                    Community Atmosphere: More than just a gym, LightWeight Gym is a community of like-minded individuals who are passionate about health and wellness. 
                    Joining our gym means gaining a supportive network of fellow members and trainers who will encourage and inspire you.
                </p>
            </div>
            </div>
            <div className="con2">
            <div className="container2">
                <div className="gymimg">
                <img src={one} alt="" />
                <div className="txtonimg">
                <p className="heading">Functional Training</p>
               
                
                <p>Functional training is a program by slam fitness which is one of the best functional fitness training in Arcot</p>
                <br /><Link to="/services"><button className="find">Find More</button></Link>
                </div>

                </div>

                <div className="gymimg">
                <img src={two} alt="" />
                <div className="txtonimg">
                <p className="heading">HIIT</p>
                
<p>Boost your metabolism and burn calories with our HIIT classes.
     These workouts combine intense bursts of exercise with short recovery periods, perfect for those looking to get in shape fast.</p>               <br /> 
<Link to="/services"> <button className="find">Find More</button></Link>
                
                </div>

                </div>
               




            </div>
            <div className="container2">
            <div className="gymimg">
                <img src={three} alt="" />
                <div className="txtonimg">
                <p className="heading">Personal Training</p>
                
                <p>Achieve your fitness goals faster with personalized guidance from our certified trainers. Our one-on-one sessions are tailored to your needs, helping you stay motivated and on track.</p>                
                <br />
               <Link to="/services"><button className="find">Find More</button></Link> 
                
                </div>
                </div>

                <div className="gymimg">
                <img src={four} alt="" />
                <div className="txtonimg">
                <p className="heading">CrossFit</p>
                <p>Challenge yourself with our CrossFit workouts. Combining weightlifting, gymnastics, and cardio, these sessions are designed to improve your overall fitness and strength.</p>               
               <br /> 
               <Link to="/services" ><button className="find">Find More</button></Link>
                
                </div>

                </div>
            </div>
            </div>
            <Quick/>

        </div>
    );
}

export default Home;
