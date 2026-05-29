"use client";

import { useState } from "react";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function ResumeViewer() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement("a");
    link.href = "/resume.png";
    link.download = "Anurag_Singh_Resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col sm:gap-8">
      {/* Image Viewer Section */}
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-white/10 sm:p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <svg
                className="h-5 w-5 text-foreground/60"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wide sm:mt-0 -mt-2">
                My Resume
              </h3>
              <p className="text-xs text-foreground/40 sm:block hidden">
                Professional experience & qualifications
              </p>
            </div>
          </div>
          <button
            onClick={handleDownload}
            disabled={isLoading}
            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 sm:mt-0 -mt-1 text-sm font-medium text-foreground transition-all duration-200 hover:bg-white/20 active:scale-95 disabled:opacity-50"
          >
            <FiDownload className="h-4 w-4" />
            {isLoading ? "Downloading" : "Download"}
          </button>
        </div>

        {/* Image Display */}
        <div className="relative w-full bg-black/30">
          <Image
            src="/resume.png"
            alt="Resume"
            width={1200}
            height={1600}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      {/* Info Card */}
      <div className="rounded-lg border border-white/10 bg-white/[0.02] sm:p-6 pt-6 backdrop-blur-sm">
        <div className="flex gap-3">
          <div className="sm:flex hidden h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
            <FiExternalLink className="h-5 w-5 text-foreground/60" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">
              Download your copy
            </h4>
            <p className="mt-1 text-sm text-foreground/60">
              Click the download button to save a copy of my resume to your device.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
