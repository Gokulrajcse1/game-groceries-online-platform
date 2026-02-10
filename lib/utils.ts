// utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind classes safely
 * - clsx handles conditional classes
 * - twMerge handles conflicting Tailwind classes (like p-2 p-4)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs))
}
