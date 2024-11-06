// Local Storage
localStorage.setItem('name', 'John');
console.log(localStorage.getItem('name')); 

// Session Storage
sessionStorage.setItem('session', 'active');
console.log(sessionStorage.getItem('session')); 

// Cookies
document.cookie = "user=John; expires=Thu, 18 Dec 2024 12:00:00 UTC";
