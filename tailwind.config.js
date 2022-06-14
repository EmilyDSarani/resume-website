module.exports = {
  //the pages you want tailwind to work with. Any File types that you want tailwind in
  content: [
    "./src/**/*{.jsx,.js}"
  ],
  //the variables for tailwind. you can change or extend(which creates new ones)
  theme: {
    extend: {
      "cadet-blue": "rgba(97, 150, 153, 0.705)"
    
    },
  },
  //tailwind specific, stuff only gets added here if the docs say so
  plugins: [],
}
