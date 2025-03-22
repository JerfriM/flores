function createPetals() {
    const numPetals = 50;
    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = (Math.random() * 2 + 3) + 's';
        petal.style.animationDelay = (Math.random() * 2) + 's';
        document.body.appendChild(petal);
    }
}
createPetals();
