import Quick from "./Quick";
function Loca()
{
    return(
        <div className="locator">
            <div>
            <h2 id="gymloc">Gym Location</h2>
            </div>
            <div className="store"> 
                
            <iframe  src="https://maps.app.goo.gl/JVSFbGchyq6c9YKj8"
          width="600"
          height="650"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
    />            

</div>
<Quick/>
        </div>
    );
}

export default Loca
