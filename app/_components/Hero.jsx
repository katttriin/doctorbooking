import React from 'react'

function Hero() {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
  Find & Book 
  <span className="text-blue-500 font-bold"> Appointment </span> 
  with your Fav 
  <span className="text-blue-500 font-bold"> Doctors </span>
</h2>



          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>

          {/* Додаємо кнопку */}
          <button className="mt-6 px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition-all">
            Explore Now 
          </button>
        </div>
      </div>

      <div>
        <img
          src="doctor.jpg"
          width={800}
          height={800}
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

  )
}

export default Hero