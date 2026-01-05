import Quick from "./Quick";
import { Link } from "react-router-dom";


function Franchise(){
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
        <div className="franchise">
             
            <div className="fran">
                    <div className="col1" id="frcol1">
                    <h2>Frequently Asked Questions</h2>
      
      <div className="faq-item">
        <h3>Q: What types of memberships do you offer?</h3>
        <p>A: We offer a variety of membership options, including monthly, yearly, and family plans.</p>
      </div>
      
      <div className="faq-item">
        <h3>Q: What classes are available at your gym?</h3>
        <p>A: We offer a range of classes including yoga, spinning, HIIT, and more. Check out our <a href=""><Link to="/Services">Services</Link></a> for the latest updates.</p>
      </div>
      
      <div className="faq-item">
        <h3>Q: Can I get a personal trainer?</h3>
        <p>A: Absolutely! We have certified personal trainers ready to help you reach your fitness goals. Learn more on our <a href=""><Link to="/Services">Services</Link></a> page.</p>
      </div>
      
      <div className="faq-item">
        <h3>Q: Do you have childcare services?</h3>
        <p>A: Yes, we offer childcare services during peak hours.</p>
      </div>
                        
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
                        <button className="ebutton" id="ebtnf" onClick={act}>Enquire</button>
                        <p id="innerhtml">{}</p>

                    </div>
                </div>
                <div>
                <Quick/>
                </div>
                


        </div>


    );
}

export default Franchise