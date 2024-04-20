/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: { backgroundImage: {
      'hero-pattern1': "url('download.jpeg')",
      'hero-pattern2': "url('content.jpeg')",
      'hero-pattern3': "url('imagegen.jpeg')",
      },}
  },
  plugins: [],
}