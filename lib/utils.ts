import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export let clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);
