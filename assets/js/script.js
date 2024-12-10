// DOM element
const toggle = document.getElementById('check')

// Setting current theme
const currentTheme = localStorage.getItem('theme') || 'dark'

// Setting dark theme
if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark')
  toggle.checked = true
}

// Event listener for changing themes
toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})