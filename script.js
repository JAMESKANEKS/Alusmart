const boxes = document.querySelectorAll('.sec1 .sec-text, .factory, .machinery, .preparation, .scenes');

const observer = new IntersectionObserver(entries => { 
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
        }
    }); 
}, {threshold: 0.5});

boxes.forEach(box => observer.observe(box));