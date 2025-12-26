"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white z-50 shadow-xl xl:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 border-b border-cyan-100/50">
            <h2 className="text-lg font-semibold text-[#005a6e]">Menu</h2>
          </div>

          {/* Navigation Content */}
          <div className="flex-1 overflow-y-auto flex flex-col py-4">
            <nav className="flex flex-col space-y-3">
              {/* About Section */}
              <div className="px-4">
                <div className="text-[#005a6e] font-medium text-sm mb-2">
                  About
                </div>
                <div className="ml-3 flex flex-col space-y-2">
                  <Link
                    href="/"
                    className="block text-sm text-[#344054] hover:text-[#005a6e] transition-colors"
                    onClick={onClose}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/"
                    className="block text-sm text-[#344054] hover:text-[#005a6e] transition-colors"
                    onClick={onClose}
                  >
                    Our History
                  </Link>
                </div>
              </div>

              {/* ProjectVault */}
              <div className="px-4">
                <div className="text-[#005a6e] font-medium text-sm mb-2">
                  ProjectVault by Amdari
                </div>
                <div className="ml-3 flex flex-col space-y-2">
                  <Link
                    href="/"
                    className="block text-sm text-[#344054] hover:text-[#005a6e] transition-colors"
                    onClick={onClose}
                  >
                    ProjectVault 1
                  </Link>
                  <Link
                    href="/"
                    className="block text-sm text-[#344054] hover:text-[#005a6e] transition-colors"
                    onClick={onClose}
                  >
                    ProjectVault 1
                  </Link>
                </div>
              </div>

              {/* R.A.V.E */}
              <Link
                href="/"
                className="block px-4 text-[#344054] font-medium text-sm hover:text-[#005a6e] transition-colors"
                onClick={onClose}
              >
                R.A.V.E by Amdari
              </Link>

              {/* TalentLoop */}
              <Link
                href="/"
                className="block px-4 text-[#344054] font-medium text-sm hover:text-[#005a6e] transition-colors"
                onClick={onClose}
              >
                TalentLoop by Amdari
              </Link>

              {/* Hackathon */}
              <Link
                href="/"
                className="block px-4 text-[#344054] font-medium text-sm hover:text-[#005a6e] transition-colors"
                onClick={onClose}
              >
                Hackathon
              </Link>
            </nav>

            {/* Actions */}
            <div className="mt-auto px-4 pt-4 border-t border-cyan-100/50 flex flex-col space-y-3">
              <Link
                href="/signin"
                className="flex items-center justify-center text-center rounded-md border h-10 border-[#005a6e] text-[#005a6e] font-bold text-sm hover:opacity-80 transition-opacity"
                onClick={onClose}
              >
                Sign in
              </Link>
              <Button
                className="w-full rounded-md h-10 bg-linear-to-r from-[#007b8a] to-[#005a6e] hover:from-[#005a6e] hover:to-[#004a5a] text-white font-bold border-none shadow-lg shadow-teal-900/10"
                onClick={onClose}
              >
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
