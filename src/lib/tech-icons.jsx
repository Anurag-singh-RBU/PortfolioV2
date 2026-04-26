import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiSupabase,
  SiOpenai,
  SiRedis,
  SiFirebase,
  SiGooglecloud,
  SiDocker,
  SiVercel,
  SiFramer,
  SiThreedotjs,
  SiLangchain,
  SiDrizzle,
  SiNodedotjs,
  SiMongodb,
  SiGooglemaps,
  SiPython,
  SiExpress,
  SiOpencv,
  SiSocketdotio,
  SiSolidity,
  SiEthereum,
  SiGooglegemini,
  SiNasa,
  SiVite,
  SiTypescript,
  SiJavascript,
  SiAppwrite,
  SiHono,
  SiServerless,
  SiWeb3Dotjs,
  SiKubernetes,
  SiMysql,
  SiPostgresql,
  SiEjs,
  SiHtml5,
  SiJsonwebtokens,
  SiPostman,
  SiShadcnui,
} from "react-icons/si";
import { Database, Sparkles, Brain, Boxes, Network, Activity, Code2, Flame, Cpu, Eye, Cloud, Link2, Rocket, Volume2 } from "lucide-react";

// adaptive => use currentColor (good for monochrome brands so they stay visible in dark/light)
const TECH_META = {
  ReactJS: { Icon: SiReact, color: "#61DAFB" },
  React: { Icon: SiReact, color: "#61DAFB" },
  NextJS: { Icon: SiNextdotjs, adaptive: true },
  "Next.js": { Icon: SiNextdotjs, adaptive: true },
  "Next.js 14": { Icon: SiNextdotjs, adaptive: true },
  "Next Js": { Icon: SiNextdotjs, adaptive: true },
  Tailwindcss: { Icon: SiTailwindcss, color: "#06B6D4" },
  Tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Prisma: { Icon: SiPrisma, adaptive: true },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
  OpenAI: { Icon: SiOpenai, adaptive: true },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  Firebase: { Icon: SiFirebase, color: "#F57C00" },
  GCP: { Icon: SiGooglecloud, color: "#4285F4" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "Vercel SDK": { Icon: SiVercel, adaptive: true },
  "Framer Motion": { Icon: SiFramer, color: "#3B82F6" },
  Motion: { Icon: SiFramer, color: "#3B82F6" },
  ThreeJS: { Icon: SiThreedotjs, adaptive: true },
  "Three.js": { Icon: SiThreedotjs, adaptive: true },
  Langchain: { Icon: SiLangchain, color: "#1C8A6B" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  NodeJS: { Icon: SiNodedotjs, color: "#5FA04E" },
  "Node": { Icon: SiNodedotjs, color: "#5FA04E" },

  // fallbacks — no Simple Icons entry, pick a thematic lucide icon + brand-ish color
  Pinecone: { Icon: Database, color: "#6366F1" },
  Convex: { Icon: Database, color: "#FF6B35" },
  RAG: { Icon: Sparkles, color: "#A855F7" },
  Mistral: { Icon: Brain, color: "#FA520F" },
  LlamaIndex: { Icon: Boxes, color: "#6E57E0" },
  XYFlow: { Icon: Network, color: "#FF0072" },
  Langfuse: { Icon: Activity, color: "#0EA5E9" },
  Unsloth: { Icon: Cpu, color: "#10B981" },
  Drizzle: { Icon: SiDrizzle, color: "#84CC16" },

  // hackathon-era stack
  "React JS": { Icon: SiReact, color: "#61DAFB" },
  "React Native": { Icon: SiReact, color: "#61DAFB" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  "Google Maps API": { Icon: SiGooglemaps, color: "#4285F4" },
  Python: { Icon: SiPython, color: "#3776AB" },
  Express: { Icon: SiExpress, adaptive: true },
  OpenCV: { Icon: SiOpencv, color: "#5C3EE8" },
  "Socket.IO": { Icon: SiSocketdotio, adaptive: true },
  Solidity: { Icon: SiSolidity, adaptive: true },
  Ethereum: { Icon: SiEthereum, adaptive: true },
  "Gemini 1.5 Pro": { Icon: SiGooglegemini, color: "#8B5CF6" },
  "NASA Open APIs": { Icon: SiNasa, color: "#E03C31" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  Javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  Next: { Icon: SiNextdotjs, adaptive: true },
  Hono: { Icon: SiHono, color: "#FF6B35" },
  Appwrite: { Icon: SiAppwrite, color: "#F02E65" },
  Kubernetes: { Icon: SiKubernetes, color: "#326CE5" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  EJS: { Icon: SiEjs, color: "#B4CA65" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  JWT: { Icon: SiJsonwebtokens, adaptive: true },
  Postman: { Icon: SiPostman, color: "#FF6C37" },
  Shadcn: { Icon: SiShadcnui, adaptive: true },
  "React Js": { Icon: SiReact, color: "#61DAFB" },
  "Node JS": { Icon: SiNodedotjs, color: "#5FA04E" },
  "Express Js": { Icon: SiExpress, adaptive: true },

  // no Simple Icons entry
  YOLO: { Icon: Eye, color: "#00BFFF" },
  "Serverless Functions": { Icon: SiServerless, adaptive: true },
  Hardhat: { Icon: Flame, color: "#F0B90B" },
  "Web3.js": { Icon: SiWeb3Dotjs, color: "#F16822" },
  "Web Audio API": { Icon: Volume2, color: "#8B5CF6" },
};

export const SKILLS = [
  "React Js",
  "Next Js",
  "Tailwind",
  "TypeScript",
  "JavaScript",
  "Prisma",
  "OpenAI",
  "Docker",
  "Kubernetes",
  "Vercel SDK",
  "Framer Motion",
  "Node JS",
  "Drizzle",
  "MongoDB",
  "MySQL",
  "Google Maps API",
  "Python",
  "Express",
  "OpenCV",
  "Socket.IO",
  "Gemini 1.5 Pro",
  "Vite",
  "Hono",
  "Appwrite",
  "PostgreSQL",
  "EJS",
  "HTML",
  "Express Js",
  "Shadcn",
  "JWT",
  "Postman"
];

const DEFAULT = { Icon: Code2, adaptive: true };

const hexToRgba = (hex, alpha) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const TechBadge = ({ name }) => {
  const meta = TECH_META[name] ?? DEFAULT;
  const { Icon, color, adaptive } = meta;

  if (adaptive) {
    return (
      <span className="inline-flex items-center gap-0.5 rounded border border-dashed border-black/[0.15] bg-black/[0.04] px-1 py-px text-[8px] text-foreground/80 dark:border-white/[0.18] dark:bg-white/[0.06] md:px-1.5 md:text-[9px]">
        <Icon className="h-2 w-2 md:h-2.5 md:w-2.5" />
        {name}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-0.5 rounded border border-dashed px-1 py-px text-[8px] font-medium md:px-1.5 md:text-[9px]"
      style={{
        backgroundColor: hexToRgba(color, 0.12),
        borderColor: hexToRgba(color, 0.35),
        color,
      }}
    >
      <Icon className="h-2 w-2 md:h-2.5 md:w-2.5" style={{ color }} />
      {name}
    </span>
  );
};
