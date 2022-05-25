module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {},
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1024px'
    },
    minWidth: {
      '1/6': '16.666%'
    },
    colors: {
      'bkgd': '#C0D6DF',
      'notes-bkgd': '#1b63724b',
      'btn':'#022B3A',
      'btn-hover': '#044157',
      'btn-delete': '#ce1703',
      'deleteHover': '#ee1e06',
      'white': '#ffffff',
      'black': '#000000',
      'note-melon': '#E9AFA3',
      'note-june': '#C5D86D'
    },
    
  },
  plugins: [],
}