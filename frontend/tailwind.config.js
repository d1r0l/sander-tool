/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#212529ff",
        secondary: "adb5bdff",
        accent: "#48CAE4",
        BLACK: {
          1: "#000000",
          2: "#343a40ff",
          3.: "#495057ff",
          4: "#adb5bdff",
          5: "#ced4daff",
          6: "#dee2e6ff",
        },

        white: {
          DEFAULT: '#FFFFFF',
          800: '#E4E4E6',
          700: '#D6D9E9',
          600: '#AFB0B6',
          500: '#62646C',
        },
      },
    },
  },
  plugins: [],
};

/** 
--seasalt: #f8f9faff;
--antiflash-white: #e9ecefff;
--platinum: #dee2e6ff;
--french-gray: #ced4daff;
--french-gray-2: #adb5bdff;
--slate-gray: #6c757dff;
--outer-space: #495057ff;
--onyx: #343a40ff;
--eerie-black: #212529ff;
 
 */