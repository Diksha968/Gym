import React from 'react'
import img from "../assets/Boxing-bro.png"; 
import img2 from  "../assets/Gymnastic-amico.png";
import img3 from "../assets/Meditation-pana.png";
import img4 from "../assets/Workout-rafiki.png";



const HeroCard = () => {
  return (
    <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto sm:p-10  flex flex-wrap flex-col items-center text-center'>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  md:gap-12 gap-8 justify-center items-center">
  {/* < Card  */}
  <div class="w-72 h-fit group  ">
    <div class="relative overflow-hidden">
      <img class="h-96 w-full object-cover rounded-e-xl  rounded-s-3xl overflow-hidden" src="https://images.pexels.com/photos/7992076/pexels-photo-7992076.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
      <div class="absolute h-full w-full bg-black/20 p-10 flex flex-col rounded-e-xl  rounded-s-3xl items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <img className='w-24 h-24 border-2 rounded-xl border-white' src={img} alt="" />
        <button class="bg-white font-semibold text-black rounded-md py-2 px-5 mt-2 mb-2">Boxing</button>
        <p className='text-white text-sm text-center'>Boxing is a combat sport and a martial art in which two people, usually wearing protective gloves and other protective equipment</p>
      </div>
    </div>
    
    
  </div>

  {/* < Card  */}
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img class="h-96 w-full object-cover rounded-e-xl  rounded-s-3xl" src="https://images.pexels.com/photos/4753989/pexels-photo-4753989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <div class="absolute h-full w-full bg-black/20 p-10 flex rounded-e-xl  rounded-s-3xl flex-col items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <img className='w-24 h-24 border-2 rounded-xl border-white' src={img2} alt="" />
        <button class="bg-white font-semibold text-black rounded-md py-2 px-5 mt-2 mb-2">Gymnastics</button>
        <p className='text-white text-sm text-center'>Gymnastics is a type of sport that includes physical exercises requiring balance, strength, flexibility, agility, coordination, artistry and endurance</p>
      </div>
    </div>
    
    
  </div>


  {/* < Card  */}
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img class="h-96 w-full object-cover rounded-e-xl  rounded-s-3xl" src="https://images.pexels.com/photos/6146098/pexels-photo-6146098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <div class="absolute h-full w-full bg-black/20 p-10 flex flex-col rounded-e-xl  rounded-s-3xl items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <img className='w-24 h-24 border-2 rounded-xl border-white' src={img3} alt="" />
        <button class="bg-white font-semibold text-black rounded-md py-2 px-5 mt-2 mb-2">Yoga</button>
        <p className='text-white text-sm '>Yoga is a practice that connects the body, breath, and mind. It uses physical postures, breathing exercises, and meditation to improve overall health.</p>
      </div>
    </div>
    
    
  </div>



  {/* < Card  */}
  <div class="w-72 h-fit group">
    <div class="relative overflow-hidden">
      <img class="h-96 w-full object-cover rounded-e-xl  rounded-s-3xl" src="https://images.pexels.com/photos/1886487/pexels-photo-1886487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
      <div class="absolute h-full w-full bg-black/20 p-10 flex flex-col rounded-e-xl  rounded-s-3xl items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <img className='w-24 h-24 border-2 rounded-xl border-white' src={img4} alt="" />
        <button class="bg-white font-semibold text-black rounded-md py-2 px-5 mt-2 mb-2">FITNESS</button>
        <p className='text-white text-sm text-center'>one's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior.</p>
      </div>
    </div>
    
    
  </div>
</div>
</div>
  )
}

export default HeroCard ;