"use client";
import Image from "next/image";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DoctorList from "@/components/DoctorList";

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

function SearchPage() {
  const { category } = useParams();
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    if (category) {
      const filtered = doctorList.filter((doctor) =>
        doctor.attributes.categories.data.some((cat) =>
          cat.attributes.Name.toLowerCase().includes(category.toLowerCase()) // зміна тут!
        )
      );
      setFilteredDoctors (filtered);
    }
  }, [category,doctorList]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Doctors in {category}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white border rounded-lg shadow-lg p-4">
              {/* Фото лікаря */}
              <div className="w-full h-48 overflow-hidden rounded-md">
                <Image
                  src={doctor.attributes.image.data.attributes.url}
                  alt={doctor.attributes.name}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Інформація */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{doctor.attributes.name}</h3>
                <p className="text-sm text-gray-500">{doctor.attributes.categories.data[0].attributes.Name}</p>
                <p className="text-blue-600 font-semibold mt-2">{doctor.attributes.Year_of_Experience}</p>
                <p className="text-gray-500">{doctor.attributes.Address}</p>
                <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">No doctors found</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;