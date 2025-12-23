// src/utils/assetResolver.js

// This will include ALL matching files in the build output.
const assetMap = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
});

export function resolveAsset(pathFromJson) {
  if (!pathFromJson) return '';

  // Your JSON uses "@/assets/..."
  // Convert that into Vite's glob key format: "/src/assets/..."
  const key = pathFromJson.replace(/^@\//, '/src/');

  return assetMap[key] ?? '';
}
