"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { categories } from "@/constants/filter";

export function FiltersHome() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  return (
    <div className="flex flex-col gap-4 items-stretch sm:items-center bg-white rounded-custom p-4 sm:p-6 shadow-lg">
      <div className="relative flex-1 w-full">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        {/* <Input
          placeholder="Buscar doces deliciosos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-12 h-12 text-base sm:text-lg border-2 border-pink-100 focus:border-pink-300 rounded-xl w-full"
        /> */}
        <input
          type="text"
          placeholder="Buscar doces deliciosos..."
          className="pl-12 h-12 text-base sm:text-lg border-2 border-pink-100 focus:!border-pink-300 active:border-pink-300 focus:ring-pink-300 active:ring-pink-300 rounded-xl w-full"
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full  transition-all duration-200 py-2 text-xs sm:text-sm px-3 sm:px-4 border ${
              selectedCategory === category
                ? "bg-primary hover:bg-primary/90 shadow-lg scale-105 text-white"
                : "hover:bg-pink-50 hover:border-pink-300 border-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
