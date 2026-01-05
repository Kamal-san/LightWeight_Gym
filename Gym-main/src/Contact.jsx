import cimg from "./img/contact/cimg.jpg"
import Quick from "./Quick";


function Contact()
{
    function act()
    {
        var name = document.getElementById("cname").value;
        var mail = document.getElementById("cmail").value;
        var phno = document.getElementById("cno").value;
        var msg = document.getElementById("cmsg").value;

        if(name ===" ")
        {
            alert("*fill all")
        }
        else if(mail== "" ){
            alert("*fill all")


        }
        else if(phno== "" ){
            alert("*fill all")


        }
        else if(msg== "" ){
            alert("*fill all")


        }
        else{
            document.getElementById("innerhtml").innerHTML ="Submitted";
            setTimeout(function()
        {
            document.getElementById("innerhtml").innerHTML= "";

        },2000);

        }





        
    }
    return(
        <div className="contact">

         
            
            <div className="cimg">
                <img src={cimg} alt="" />
                <div className="txtoncon">
                    <div className="col1">
                        <h2>Contact Us</h2>
                        <p>Gym Location : </p>
                        <p>53,Kalavai Road,Near ASM School,Arcot,Ranipet district</p>
                        
                        <p>Mobile No : 9629526697</p>
                        
                        <p>lightweight@gmail.com</p>
                        
                        <p>Working Hours : 4 AM - 9:30 PM</p>

                        
                    </div>
                    <div className="col2">
                        <h2>Enquire Now</h2>
                        <input type="text" id="cname" placeholder="Name*"/>
                        <br />
                        <input type="text" id="cmail" placeholder="Email*"/>
                        <br />
                        <input type="number" id="cno" placeholder="Mobile Number"/>
                        <br />
                        <textarea name="message" id="cmsg" placeholder="Message"></textarea>
                        <br />
                        <button className="ebutton" onClick={act}>Enquire</button>
                        <p id="innerhtml">{}</p>


                    </div>
                </div>
            </div>
             <div id="summa">             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br/>
            <Quick/>
        </div>
    );
}
export default Contact
