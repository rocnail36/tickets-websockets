import { FormStart } from "@/components/FormStart";
import { NavBar } from "../components/NavBar";




const Home = () => {



  return (
    <div className="w-screen h-screen flex">
      <NavBar/>
      <div className="h-screen w-[70%] flex justify-center items-center">
         <div className="w-[90%] h-[60%] bg-white px-8">
            <h2 className="text-[56px] mb-4">Ingresar</h2>
            <p className="mb-8 text-lg">ingrese su nombre y numero de escritorio</p>
           <hr  className="mb-8"/>
           <FormStart/>
         </div>



      </div>
    </div>
  );
};

export default Home;
