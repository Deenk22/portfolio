/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "black-deenk": "#121212",
        "white-section1": "#D9D8D5",
        "black-font": "#333332",
        "yellow-bee": "#F6BE49",
        "hover-font": "#944c4e",
        "js-yellow": "#f7df1e",
        "linkedIn-blue": "#0e76a8",
        "github-color": "#9b50cb",
        "youtube-color": "#c4302b",
        "unreal-color": "#61cdff",
        "blue-im": "#d0e4e9",
        "darkblue-im": "#162938",
        "pink-im": "#ef90a3",
        "yellow-rm": "#eeee29",
        "green-rm": "#233b29",
        "black-rm": "#1f1d1d",
        "green-ec": "#408084",
        "white-ec": "#ffffff",
        "black-ec": "#212122",
        "purple-pt": "#7472a1",
        "darkgray-pt": "#333337",
        "black-pt": "#222222",
        "blue-powert": "#1c9fe3",
        "green-powert": "#5fd343",
      },
      fontFamily: {
        main: ["Quicksand"],
      },
      backgroundImage: {
        "open-menu": "url('./src/assets/svg/open-menu.svg')",
        "close-menu": "url('./src/assets/svg/close-menu.svg')",
        "dark-mode": "url('./src/assets/svg/dark-mode-bg.svg')",
        "light-mode": "url('./src/assets/svg/light-mode-bg.svg')",
        "section-stack": "url('./src/assets/bg-section-tres.jpg')",
        "section-bg": "url('./src/assets/bg-section-dos.jpg')",
        "project-01": "url('./src/assets/projects/rick&morty/rm01.png')",
      },
    },
  },
  plugins: [],
};
