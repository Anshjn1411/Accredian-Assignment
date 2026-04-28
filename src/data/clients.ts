import type { Partner } from "@/types";
import { ASSET_BASE } from "@/lib/constants";

export const PARTNERS: Partner[] = [
  { name: "Reliance", src: `${ASSET_BASE}/rel.png`, size: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" },
  { name: "HCL", src: `${ASSET_BASE}/hcl.png`, size: "w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40" },
  { name: "IBM", src: `${ASSET_BASE}/ibm.png`, size: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" },
  { name: "CRIF", src: `${ASSET_BASE}/crif.png`, size: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" },
  { name: "ADP", src: `${ASSET_BASE}/adp.svg`, size: "w-14 h-14 sm:w-24 sm:h-24 md:w-24 md:h-24" },
  { name: "BAYER", src: `${ASSET_BASE}/bayer.svg`, size: "w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24" },
];
