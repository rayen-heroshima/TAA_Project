"use client";
import { esgData } from "@/lib/data";
import { HoverEffect } from "./ui/card-hover-effect";

export default function NormesESRS() {
  const activeParentCategory = esgData[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Normes européennes de reporting ESG
      </h2>

      <div className="article-content flex flex-col lg:flex-row gap-8 items-center justify-center w-full">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-1/2 h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553413077-190dd305871c"
            alt="TAA Conference"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>

        {/* Text Section */}
        <div className="flex-grow w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6">
            European Sustainability Reporting Standards
          </h2>
          <p className="text-red-600 mb-4">(ESRS)</p>
          <p className="text-gray-600 mb-4">
            Depuis janvier 2024, les normes européennes de reporting sur le
            développement durable (ESRS) fixent le cadre du reporting sur le
            développement durable en Europe.
          </p>
          <p className="text-gray-600 mb-4">
            Ce changement s&apos;accompagne de la directive CSRD (Corporate
            Sustainability Reporting Directive) qui met en application les
            12 premières ESRS européennes, visant à normaliser et à
            améliorer la transparence des rapports environnementaux, sociaux
            et de gouvernance (ESG) à travers le continent.
          </p>
        </div>
      </div>

      {/* Subcategories Grid Section */}
      {activeParentCategory?.subcategories && (
        <div className="w-full mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeParentCategory.subcategories.map((subCategory) => (
              <HoverEffect key={subCategory.id} category={subCategory} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
