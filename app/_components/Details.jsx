import React from "react";
import { useRouter } from "next/navigation";

const doctors = [
  {
    id: 1,
    name: "Dr. Emma Swon",
    specialization: "Psychotropic",
    experience: "15 Years",
    image: "http://localhost:1337/uploads/jeremy_alford_O13_B7su_RG_4_A_unsplash_a52df72f4b.jpg"
  },
  {
    id: 2,
    name: "Dr. Jane Cooper",
    specialization: "Dentist",
    experience: "15 Years",
    image: "http://localhost:1337/uploads/beautiful_young_female_doctor_looking_camera_office_1_173742d6f8.jpg"
  },
  // Додай інших лікарів...
];

export default function Details({ params }) {
  const doctor = doctors.find((doc) => doc.id === parseInt(params.id));

  if (!doctor) {
    return <div className="p-6 text-red-600">Doctor not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{doctor.name}</h1>
      <img src={doctor.image} alt={doctor.name} className="w-full h-64 object-cover my-4 rounded-lg"/>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Experience:</strong> {doctor.experience}</p>
    </div>
  );
}
