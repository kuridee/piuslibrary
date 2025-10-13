import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">

      <div className="sm:col-span-7 min-h-[700px] flex flex-col justify-center">
        <p className=" text-[70px] font-bold">FASTEST GROWING COMPANY</p>
        <p className=" text-sm w-full sm:w-[300px] md:w-[400px] lg:w-[500px] max-w-full h-auto bg-gray-100 p-4 rounded-lg text-gray-800 leading-relaxed">A good journey doesn’t just take you across borders; it transforms the way you see the world. It teaches patience, 
        opens your heart to adventure, and reminds you that every sunrise in a new place is a chance to start fresh.</p><br/>

        <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold w-40">
  Invest with us
</button><br/><br/>



     <div className="flex gap-6">
     <p className="text-xl font-bold">400-Branches</p>
          <p className="text-xl font-bold">4,000-Employees</p>
          <p className="text-xl font-bold">40,000-Investment Capital</p>

     </div>
        
      
      </div>
      <div className=" sm:col-span-5 min-h-[700px]">

      <div className="relative sm:col-span-5 min-h-[600px] ">
          <Image
            src="/images/pic.jpg"
            alt="MySite Logo"
            fill
            className="object-cover rounded-lg grayscale"
          />
      </div>


      </div>

    </div>
    
  );
}
