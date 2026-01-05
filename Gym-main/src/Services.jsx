import { useState } from "react";
import sone from "./img/services/sone.jpg";
import stwo from "./img/services/stwo.jpg";
import sthree from "./img/services/sthree.jpg";
import sfour from "./img/services/sfour.jpg";
import sfive from "./img/services/sfive.jpg";
import Quick from "./Quick";
function Service() {
    const [selectedService, setSelectedService] = useState("functionaltraining");

    const handleChange = (event) => {
        setSelectedService(event.target.value);
    };

    return (
        <div className="service">
            
            
            <div className="simg">
                <img src={sone} alt="Functional Training" />
                <div className="txtons">
                    <select name="function" id="func" value={selectedService} onChange={handleChange}>
                        <option value="functionaltraining">Functional Training</option>
                        <option value="hiit">HIIT</option>
                        <option value="personaltraining">Personal Training</option>
                        <option value="crossfit">CrossFit</option>
                    </select>
                </div>
            </div>

            <div className="scon" style={{ display: selectedService === "functionaltraining" ? "block" : "none" }}>
                <div className="scon">
                <div className="col1">
                    <img src={stwo} alt="Functional Training" />
                </div>
                <div className="col2">
                    <p>Functional training focuses on enhancing strength, mobility, and balance to improve everyday movement efficiency.
                         It integrates flexibility and endurance into exercises that mimic daily activities, fostering stability and coordination. 
                         Core strength and control are key, promoting a balanced, full-body workout.
                          This dynamic approach increases power, speed, and agility. Using bodyweight and versatile tools, functional training boosts overall fitness and conditioning.
                           It is practical for everyday movements, injury prevention, and rehabilitation, offering adaptable routines for all levels. 
                           Ultimately, it enhances performance, wellness, and versatility, making it a comprehensive and effective training method.</p>
                </div>
                </div>
            </div>

            <div className="scon" style={{ display: selectedService === "hiit" ? "block" : "none" }}>
                <div className="scon">
                <div className="col1">
                    <img src={sthree} alt="HIIT" />
                </div>
                <div className="col2">
                    <p>High-Intensity Interval Training (HIIT) is a powerful workout method combining short bursts of intense exercise with brief rest or low-intensity periods.
                         This approach maximizes cardio and strength gains in a short time, promoting fat burning and boosting metabolism.
                          HIIT enhances endurance, power, and speed, making it an efficient choice for busy individuals. 
                          The workouts are highly adaptable, using bodyweight, weights, or equipment like kettlebells. 
                          HIIT variety keeps routines engaging, targeting different muscle groups for overall fitness. 
                          It supports heart health, muscle growth, and calorie burn, and is known for its afterburn effect, where the body continues to burn calories post-exercise. 
                          Ideal for all levels, HIIT can be modified for personal goals, offering effective results in minimal time.</p>
                </div>
                </div>
            </div>

            <div className="scon" style={{ display: selectedService === "personaltraining" ? "block" : "none" }}>
                <div className="scon">
                <div className="col1">
                    <img src={sfour} alt="Personal Training" />
                </div>
                <div className="col2">
                    <p>Personal training offers customized fitness programs tailored to individual goals and needs, providing expert guidance and motivation.
                         Trainers design personalized routines to enhance strength, flexibility, endurance, and overall fitness. 
                         They focus on proper technique, ensuring safe and effective exercise execution. 
                         Accountability and support are key benefits, helping clients stay committed and consistent. 
                         Personal training addresses specific objectives like weight loss, muscle building, or rehabilitation, and adapts to different fitness levels and abilities.
                          Trainers offer variety in workouts, keeping sessions engaging and challenging. 
                          They provide valuable feedback and adjust plans as clients progress. With a personalized approach,
                           personal training promotes confidence, well-being, and long-term success in achieving health and fitness goals.</p>
                </div>
                </div>
            </div>

            <div className="scon" style={{ display: selectedService === "crossfit" ? "block" : "none" }}>
                <div className="scon">
                <div className="col1">
                    <img src={sfive} alt="CrossFit" />
                </div>
                <div className="col2">
                    <p>CrossFit is renowned for its dynamic, high-intensity workouts that blend elements of weightlifting, gymnastics, and cardiovascular conditioning. 
                        It offers a diverse range of exercises and routines that are scalable to individual fitness levels and goals, promoting overall strength, endurance, flexibility, and agility. 
                        Trainers emphasize proper technique to ensure safe and effective performance, fostering a supportive community environment where participants encourage each other to achieve personal bests. 
                        This approach not only enhances physical fitness but also cultivates mental toughness and camaraderie, making CrossFit a popular choice for those seeking a challenging yet rewarding fitness regimen.</p>
                </div>
                </div>
            </div>
            <Quick/>
        </div>
    );
}

export default Service;
