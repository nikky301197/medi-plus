import { useNavigate } from "react-router-dom";

export default function ErrorComponent() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="">
        <div className="container" style={{ textAlign: "center" }}>
          <div className="row ">
            <div className=" col-12">
              <img alt="error page " src="/img/Oops! 404 Error with a broken robot-cuate.png"  height={10} width={500}/>
              
              <button className="btn mt-lg-5 " 
              onClick={(event)=>{
                event.preventDefault();
                navigate("/")
              }}
              
              >Go back to Home</button> 
            </div>
            {/* <div className="col-12">
            <button className="btn" >Go back to Home</button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
