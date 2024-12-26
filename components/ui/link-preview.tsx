"use client";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type LinkPreviewProps = {
  children: React.ReactNode;
  className?: string;
  componentPreview: React.ReactNode; // The component to display as preview
};

export const LinkPreview = ({
  children,
  className,
  componentPreview, // The component to be displayed as preview
}: LinkPreviewProps) => {
  const [isOpen, setOpen] = React.useState(false);
  const [hoverEffect, setHoverEffect] = React.useState(false);

  const handleMouseEnter = () => setHoverEffect(true);
  //const handleMouseLeave = () => setHoverEffect(false);

  return (
    <HoverCardPrimitive.Root
      openDelay={50}
      closeDelay={100}
      onOpenChange={(open) => setOpen(open)}
    >
      <HoverCardPrimitive.Trigger
        onMouseEnter={handleMouseEnter}
        //onMouseLeave={handleMouseLeave}
        className={cn("text-black dark:text-white", className)}
      >
        {children}
      </HoverCardPrimitive.Trigger>

      <HoverCardPrimitive.Content
        
        align="center"
        sideOffset={5} // Adjust the offset to bring the card closer to the trigger
        className="relative"
      >
        <AnimatePresence>
          {isOpen && hoverEffect && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.6 }} // Start off slightly above the trigger
              animate={{
                opacity: 1,
                y: -20, // Set final Y position to appear just above the trigger
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="shadow-2xl rounded-2xl"
             
            >
              <div
                className="block p-4 bg-white border-2 border-transparent rounded-2xl shadow-xl"
                style={{ fontSize: 10 }}
              >
                {/* Render the component passed as preview */}
                <div className="rounded-lg overflow-hidden w-[999px] ">
                  {componentPreview}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
