"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const pathname = usePathname(); // Using usePathname hook
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component is not yet mounted, return null
  if (!isMounted) return null;

  // Split pathname into path segments
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600">
      <Link href="/" passHref>
        <span className="hover:text-blue-600">Home</span>
      </Link>
      {pathnames.map((segment, index) => {
        const path = `/${pathnames.slice(0, index + 1).join("/")}`;
        return (
          <span key={index} className="flex items-center">
            <span className="mx-2">/</span>
            <Link href={path} passHref>
              <span className="hover:text-blue-600">
                {segment.replace(/-/g, " ")} {/* Replace hyphens with spaces */}
              </span>
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
