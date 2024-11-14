/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sora: ["Sora", "sans-serif"]
  		},
  		backgroundImage: {
  			banner: 'url(./assets/img/banner.jpg)',
			congrates: 'url(./assets/congrates.png)',
			img1: 'url(./assets/img4.jpg)',
			img2: 'url(./assets/img3.jpg)',
			img3: 'url(./assets/img2.jpg)',
			img4: 'url(./assets/img1.jpg)',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate"), require('daisyui'),],
}

