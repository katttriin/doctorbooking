"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useState, useEffect } from "react";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);
  const [loading, setLoading] = useState(true); // Додаємо стан для завантаження
  const [error, setError] = useState(null); // Додаємо стан для помилок

  useEffect(() => {
    getDoctorList();
  }, []);

  const getDoctorList = () => {
    GlobalApi.getDoctorList()
      .then((resp) => {
        console.log("API Response:", resp.data.data);
        setDoctorList(resp.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching doctor list:", err);
        setError("Failed to load doctors");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Search bar + Categories */}
      <CategorySearch />

      {/* Loading / Error Handling */}
      {loading ? (
        <p className="text-center">Loading doctors...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <DoctorList doctorList={doctorList} />
      )}
    </div>
  );
} 