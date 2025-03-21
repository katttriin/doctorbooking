"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Command,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandInput,
} from "@/components/ui/command";

const categories = [
  { name: "General Doctor", icon: "http://localhost:1337/uploads/doctor_17306826_d98c7569b1.png" },
  { name: "Orthopedic", icon: "http://localhost:1337/uploads/bones_14994985_6f09e341d2.png" },
  { name: "Otology", icon: "http://localhost:1337/uploads/human_14976947_73288c0127.png" },
  { name: "Neurologist", icon: "http://localhost:1337/uploads/brain_15743597_700c854ef5.png" },
  { name: "Psychotropic", icon: "http://localhost:1337/uploads/vision_16314900_6965b579dd.png" },
  { name: "Cardiologist", icon: "http://localhost:1337/uploads/health_support_18274091_8df81deb46.png" },
  { name: "Dentist", icon: "http://localhost:1337/uploads/tooth_17006273_b6cf458638.png" },
  { name: "Eye Specialist", icon: "http://localhost:1337/uploads/eye_test_18149942_0844c61569.png" },
];

const doctorList = [
  { id: 6, name: "Dr. Toni Stark", category: "General Doctor / Otology", experience: "15 Years", image: "http://localhost:1337/uploads/portrait_professional_medical_worker.jpg" },
  { id: 7, name: "Dr. Swadhin Dhakne", category: "Orthopedic / General Doctor", experience: "10 Years", image: "http://localhost:1337/uploads/doctor_scrubs.jpg" },
  { id: 2, name: "Dr. Jane Cooper", category: "Dentist", experience: "15 Years", image: "http://localhost:1337/uploads/female_doctor_office.jpg" },
  { id: 3, name: "Dr. Jenny Carry", category: "Neurologist", experience: "10 Years", image: "http://localhost:1337/uploads/doctor_clipboard.jpg" }
];

function CategoryList() {
  const router = useRouter();
  const pathname = usePathname();
  const category = decodeURIComponent(pathname.split("/")[2] || "");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    const filtered = doctorList.filter((doctor) =>
      doctor.category.toLowerCase().includes(category.toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [category]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="h-screen mt-5 flex flex-col bg-white shadow-md p-4 w-64">
        <Command>
          <CommandInput placeholder="Search categories..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Categories">
              {categories.map((item, index) => (
                <CommandItem key={index} onSelect={() => router.push(`/search/${item.name}`)}>
                  <div className={`p-2 flex gap-2 text-[12px] text-blue-500 rounded-md cursor-pointer w-full ${category === item.name ? "bg-blue-100 font-bold" : ""}`}>
                    <Image src={item.icon} alt={item.name} width={25} height={25} />
                    <label>{item.name}</label>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </div>

      {/* Content */}
      <div className="ml-10 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Doctors in {category}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all transform hover:scale-105">
                <Image
                  className="rounded-full border-2 border-gray-200"
                  src={doctor.image}
                  alt={doctor.name}
                  width={150}
                  height={150}
                  layout="intrinsic"
                />
                <h2 className="text-xl font-semibold mt-4">{doctor.name}</h2>
                <p className="text-sm text-gray-600">{doctor.category}</p>
                <p className="text-sm text-gray-500">Experience: {doctor.experience}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-lg">No doctors found in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
