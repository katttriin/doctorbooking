"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Додаємо категорії вручну (або замінюємо API-запитом)
const categories = [
  {
    attributes: {
      Name: "General Doctor",
      Icon: { data: { attributes: { url: "/uploads/doctor_17306826_d98c7569b1.png" } } },
    },
  },
  {
    attributes: {
      Name: "Orthopedic",
      Icon: { data: { attributes: { url: "/uploads/bones_14994985_6f09e341d2.png" } } },
    },
  },
  {
    attributes: {
      Name: "Otology",
      Icon: { data: { attributes: { url: "/uploads/human_14976947_73288c0127.png" } } },
    },
  },
  {
    attributes: {
      Name: "Neurologist",
      Icon: { data: { attributes: { url: "/uploads/brain_15743597_700c854ef5.png" } } },
    },
  },
  {
    attributes: {
      Name: "Psychotropic",
      Icon: { data: { attributes: { url: "/uploads/vision_16314900_6965b579dd.png" } } },
    },
  },
  {
    attributes: {
      Name: "Cardiologist",
      Icon: { data: { attributes: { url: "/uploads/health_support_18274091_8df81deb46.png" } } },
    },
  },
  {
    attributes: {
      Name: "Dentist",
      Icon: { data: { attributes: { url: "/uploads/tooth_17006273_b6cf458638.png" } } },
    },
  },
  {
    attributes: {
      Name: "Eye Specialist",
      Icon: { data: { attributes: { url: "/uploads/eye_test_18149942_0844c61569.png" } } },
    },
  },
];

function CategorySearch() {
  return (
    <div className='mb-10 flex flex-col items-center gap-2 text-center'>
      <h2 className='font-bold text-4xl tracking-wide'>
        Search <span className='text-blue-500'>Doctors</span> 
      </h2>
      <h2 className='text-gray-600 text-xl'>
        Search Your Doctor and Book Appointment in one click
      </h2>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className='h-4 w-4'/>
          Search
        </Button>
      </div>

      {/* Відображення категорій */}
      <div className='grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-6'>
        {categories.map((item, index) => (
          <Link 
            href={'/search/' + item.attributes.Name} 
            key={index} 
            className='flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer 
            gap-2 hover:scale-110 transition-all ease-in-out'
          >
            <Image
              src={`http://localhost:1337${item.attributes?.Icon?.data?.attributes?.url || '/default-icon.png'}`}
              alt='icon'
              width={40}
              height={40}
            />
            <label className='text-blue-600 text-sm'>{item?.attributes?.Name}</label>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategorySearch;
