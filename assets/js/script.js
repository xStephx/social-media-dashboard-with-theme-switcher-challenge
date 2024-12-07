const toggle = document.getElementById('check')

const currentTheme = localStorage.getItem('theme')

if (currentTheme === 'dark') {
  document.documentElement.classList.add('dark')
  toggle.checked = true
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})