"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation"; // Додаємо useParams

function SearchPage() {
  const params = useParams(); // Отримуємо параметри

  useEffect(() => {
    console.log("Page Loaded", params);
  }, [params]);

  return (
  <div className="mt-5 font-bold" >
    Search {params.cname}
    </div>
    )

}

export default SearchPage; 