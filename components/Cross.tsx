"use client";

import { esgData } from "@/lib/data"; // Assuming this is where esgData is imported
import { HoverEffect } from "./ui/card-hover-effect";
import { LinkPreview } from "./ui/link-preview";
import NormesESRS from "./NormesESRS";
export default function Cross() {
  // Accessing the first subcategory within subcategories
  const activeChildCategory = esgData?.[0]?.subcategories?.[0];

  return (
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Display the title, description, and icon of the selected category */}
      {activeChildCategory ? (
        <div
          className={`p-6 rounded-lg ${activeChildCategory.color}`}
        >
            <LinkPreview
            componentPreview={<NormesESRS />}
            >
          <h2 className="text-3xl font-bold text-center">{activeChildCategory.title}</h2>
          </LinkPreview>
          <p className="text-gray-600 text-center mt-4">{activeChildCategory.description}</p>
          {/* If there's an icon, you can display it here */}
          {activeChildCategory.icon && (
            <div className="flex justify-center mt-4">
              <span className="text-4xl">{activeChildCategory.icon}</span>
            </div>
          )}
        </div>
      ) : (
        <p>Category not found.</p>
      )}
      {activeChildCategory?.subcategories && (
                        <div>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 ">
                            {activeChildCategory.subcategories.map((subCategory) => (
                                <HoverEffect
                                key={subCategory.id}
                                category={subCategory}
                                
                               
                              />
                             
                            ))}
                          </div>
                        </div>
                      )}
    </div>
  );
}
