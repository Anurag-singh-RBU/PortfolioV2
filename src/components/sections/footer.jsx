"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LocationIcon from "@/components/icons/location";
import BoltIcon from "@/components/icons/bolt";
import CloudSunIcon from "@/components/icons/cloud-sun";
import SeikoWatchModal from "@/components/watch-modal";
import IconTelescopeTripod from "@/components/icons/telescope-tripod";
import XTwitterIcon from "@/components/icons/x-twitter";
import GithubIcon from "@/components/icons/github";
import LinkedinIcon from "@/components/icons/linkedin";
import DiscordIcon from "@/components/icons/discord";
import { IoIosMail } from "react-icons/io";
import {
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaThreads,
  FaRss,
} from "react-icons/fa6";

const navigateLinks = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Components", href: "/Components" },
  { name: "Blog", href: "/Blog" },
  { name: "Colors", href: "/Colors" },
  { name: "Resume", href: "/resume" },
];

const hexToRgba = (hex, alpha) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const socialIcons = [
  {
    label: "Twitter / X",
    href: "https://x.com/sh17va",
    icon: XTwitterIcon,
    color: "#1DA1F2",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shiva-bhattacharjee/",
    icon: LinkedinIcon,
    color: "#0077B5",
  },
  {
    label: "GitHub",
    href: "https://github.com/shivabhattacharjee",
    icon: GithubIcon,
    color: "#6e5494",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/sh17va",
    icon: FaInstagram,
    color: "#E4405F",
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/sh17va",
    icon: FaPinterestP,
    color: "#BD081C",
  },
  {
    label: "Email",
    href: "mailto:hello@theshiva.xyz",
    icon: IoIosMail,
    color: "#10B981",
  },
];

const Footer = () => {
  const [time, setTime] = useState(null);
  const [battery, setBattery] = useState(null);
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  const [visitors, setVisitors] = useState(null);
  useEffect(() => {
    const tick = () => setTime(new Date());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigator.getBattery) {
      navigator.getBattery().then((batt) => {
        const update = () => setBattery(Math.round(batt.level * 100));
        update();
        batt.addEventListener("levelchange", update);
      });
    }
  }, []);

  useEffect(() => {
    const cached = localStorage.getItem("pv_count");
    if (cached) {
      setVisitors(Number(cached).toLocaleString());
      return;
    }
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => {
        if (data.count !== null) {
          localStorage.setItem("pv_count", data.count);
          setVisitors(data.count.toLocaleString());
        }
      })
      .catch(() => { });
  }, []);

  useEffect(() => {
    fetch("/api/location")
      .then((res) => res.json())
      .then((data) => {
        const city = data.city || "";
        const country = data.country || "";
        if (city && country) {
          setLocation(`${city}, ${country}`);
        } else {
          setLocation(city || country || null);
        }
        if (data.weather) {
          setWeather(`${data.weather.temperature}${data.weather.unit}`);
        }
      })
      .catch(() => setLocation(null));
  }, []);

  const formattedDate = time
    ? time.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    : "";

  const formattedTime = time
    ? time.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    : "";

  return (
    <footer className="w-full border-t border-border/40 sm:py-8 py-8 sm:mb-0 mb-16"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.015))' }}>
      <div className="mx-auto w-full max-w-4xl sm:px-0 md:px-0 sm:py-3">
        {/* ── Navigate + Connect Section ── */}
        <div className="mb-8 sm:px-0 px-6 flex flex-col gap-8 sm:gap-10 sm:flex-row sm:justify-between">
          {/* NAVIGATE */}
          <div>
            <h4 className="mb-2 font-mono text-[14px] font-semibold uppercase tracking-[0.2em] text-gray-700 dark:text-white">
              Navigate
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 max-w-xs">
              {navigateLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-foreground text-xs font-space-mono md:text-sm text-justify text-muted-foreground/80">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h4 className="mb-3 font-mono ml-1 text-[14px] font-semibold uppercase tracking-[0.2em] text-gray-700 dark:text-white">
              CONNECT
            </h4>
            <div className="flex flex-row flex-wrap gap-x-3 gap-y-3 max-w-[350px]">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group inline-flex items-center justify-center rounded border border-dashed transition-all duration-200 hover:opacity-80 px-2 py-1.5 md:px-2.5 md:py-2"
                    style={{
                      backgroundColor: hexToRgba(social.color, 0.04),
                      borderColor: hexToRgba(social.color, 0.15),
                      color: social.color,
                    }}
                  >
                    <Icon className="h-4 w-4 md:h-[18px] md:w-[18px] transition-transform duration-200 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Status Bar + Copyright ── */}
        <div className="flex flex-col items-start justify-between sm:gap-4 gap-2 sm:px-0 px-6 sm:flex-row sm:items-end">
          {/* Left: Status info */}
          <div className="flex flex-col gap-1 font-cera text-xs text-muted-foreground/60">
            {time && (
              <SeikoWatchModal>
                <button
                  type="button"
                  className="w-fit cursor-pointer text-left transition-colors hover:text-foreground focus:outline-none focus-visible:text-foreground"
                  aria-label="Open Seiko analog watch"
                >
                  {formattedDate} &middot; {formattedTime}
                </button>
              </SeikoWatchModal>
            )}
            {location && (
              <span className="flex items-center gap-1">
                <LocationIcon className="h-3 w-3" />
                {location}
                {weather && (
                  <>
                    <span>&middot;</span>
                    <CloudSunIcon className="h-3 w-3" />
                    {weather}
                  </>
                )}
              </span>
            )}
            {(battery !== null || visitors !== null) && (
              <span className="flex items-center gap-3">
                {visitors !== null && (
                  <span className="flex items-center gap-1">
                    <IconTelescopeTripod className="h-3 w-3" />
                    {visitors} visitors
                  </span>
                )}
                {battery !== null && (
                  <span className="flex items-center gap-1">
                    <BoltIcon className="h-3 w-3" />
                    {battery}%
                  </span>
                )}
              </span>
            )}
          </div>

          {/* Right: Copyright */}
          <p className="flex text-xs text-muted-foreground/60 font-GS sm:text-right">
            &copy; {new Date().getFullYear()} Anura<p className="font-mono text-[14px] text-muted-foreground/60">g</p>&nbsp;Sin<p className="font-mono text-[14px] text-muted-foreground/60">g</p>h. All ri<p className="font-mono text-[14px] text-muted-foreground/60">g</p>hts
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
