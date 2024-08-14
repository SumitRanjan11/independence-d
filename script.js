const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn?.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn?.addEventListener('click', () => {
    container.classList.remove("active");
});
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();  
    window.location.href = 'dashboard.html'; 
});

  //primise
document.getElementById('reveal-btn')?.addEventListener('click', () => {
    const images = document.querySelectorAll('.reveal-image');
    const revealImage = (image, delay) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                image.classList.add('active');
                resolve();  
            }, delay);
        });
    };



    //to reveal all images :-
    const revealAllImages = async () => {
        for (let i = 0; i < images.length; i++) {
            await revealImage(images[i], i * 1000);  
        }
    };

    revealAllImages();
});

 