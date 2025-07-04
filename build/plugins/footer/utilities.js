import { join } from 'path';
import { readdirSync, statSync } from 'fs';

// Recursive function to find all files matching pattern in directory and subdirectories
export function findFilesRecursively(dir, pattern) {
  const results = [];
  try {
    const files = readdirSync(dir);
    for (const file of files) {
      const fullPath = join(dir, file);
      const stat = statSync(fullPath);
      if (stat.isDirectory()) {
        results.push(...findFilesRecursively(fullPath, pattern));
      } else if (pattern.test(file)) {
        results.push(fullPath);
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }
  return results;
}