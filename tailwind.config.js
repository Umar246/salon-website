/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {},
        fontFamily: {
          molish: ['Molish', 'sans-serif'], // Molish ko default sans font banaya
          // agar zaroorat ho to dusre font families bhi yahan set kar sakte hain
        },
      },
     
      plugins: [],
    };
    