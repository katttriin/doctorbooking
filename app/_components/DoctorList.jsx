import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const doctorList = [
  {
    id: 1,
    attributes: {
      name: "Dr. Emma Swon",
      categories: { data: [{ attributes: { Name: "Psychotropic" } }] },
      Year_of_Experience: "15 Years",
      Address: "",
      image: { data: { attributes: { url: "http://localhost:1337/uploads/jeremy_alford_O13_B7su_RG_4_A_unsplash_a52df72f4b.jpg" } } }
    }
  },
  {
    id: 2,
    attributes: {
      name: "Dr. Jane Cooper",
      categories: { data: [{ attributes: { Name: "Dentist" } }] },
      Year_of_Experience: "15 Years",
      Address: "",
      image: { data: { attributes: { url: "http://localhost:1337/uploads/beautiful_young_female_doctor_looking_camera_office_1_173742d6f8.jpg" } } }
    }
  },
  {
    id: 3,
    attributes: {
      name: "Dr. Jenny Carry",
      categories: { data: [{ attributes: { Name: "Neurologist" } }] },
      Year_of_Experience: "10 Years",
      Address: "",
      image: { data: { attributes: { url: "http://localhost:1337/uploads/doctor_holding_clipboard_looking_camera_cca8cc89f6.jpg" } } }
    }
  },
  {
    id: 4,
    attributes: {
      name: "Dr. Kathrin Garn",
      categories: { data: [{ attributes: { Name: "Cardiologist" } }] },
      Year_of_Experience: "5 Years",
      Address: "",
      image: { data: { attributes: { url: "http://localhost:1337/uploads/beautiful_caucasian_blonde_woman_wearing_doctor_stethoscope_7ab664aa7e.jpg" } } }
    }
  },
  {
    id: 5,
    attributes: {
      name: "Dr. Tom Cook",
      categories: { data: [{ attributes: { Name: "Otology / Eye Specialist" } }] },
      Year_of_Experience: "10 Years",
      Address: "",
      image: { data: { attributes: { url: "http://localhost:1337/uploads/smiling_doctor_with_strethoscope_isolated_grey_f2ac66d5d1.jpg" } } }
    }
  },
  {
    id: 6,
    attributes: {
      name: "Dr. Toni Stark",
      categories: { data: [{ attributes: { Name: "General Doctor / Otology" } }] },
      Year_of_Experience: "15 Years",
      Address: "",
      image: { data: { attributes: { url: "http://localhost:1337/uploads/portrait_professional_medical_worker_posing_picture_with_arms_folded_2fdadcaeb2.jpg" } } }
    }
  },
  {
    id: 7,
    attributes: {
      name: "Dr. Swadhin Dhakne",
      categories: { data: [{ attributes: { Name: "Orthopedic / General Doctor" } }] },
      Year_of_Experience: "10 Years",
      Address: "",
      image: { data: { attributes: { url: "http://localhost:1337/uploads/hospital_healthcare_workers_covid_19_treatment_concept_young_doctor_scrubs_making_daily_errands_clinic_listening_patient_symptoms_look_camera_professional_physician_curing_diseases_74b0771af7.jpg" } } }
    }
  }
];

function DoctorList() {
  return (
    <div className="mb-10 px-8">
      <h2 className="font-bold text-xl">Popular Doctors</h2>

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-4 
      lg:grid-cols-4'>
        {doctorList.map((doctor) => (
          <div key={doctor.id} className="mb-4 border-[1px] rounded-lg p-3">
            <h3 className="font-semibold">{doctor.attributes.name}</h3>
            <Image src={doctor.attributes.image.data.attributes.url} alt="doctor" width={500} height={200} 
              className="h-[200px] w-full object-cover mt-2" 
            />
            <div className='mt-3 flex flex-col gap-1'>
              <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-primary'>
                {doctor.attributes.categories.data[0].attributes.Name}
              </h2>
              <h2 className="font-bold">{doctor.attributes.name}</h2>
              <h2 className='text-blue-600 text-sm'>{doctor.attributes.Year_of_Experience}</h2>

              {/* Кнопка з переходом на сторінку Details */}
              <Link href={`/details/${doctor.id}`}>
                <button className='p-2 px-3 border-[1px] border-blue-600 text-blue-600 rounded-full w-full 
                text-center text-[11px] mt-2 cursor-pointer hover:bg-blue-500 hover:text-white'>
                  Book Now
                </button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorList;
