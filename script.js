function scrollCarousel(direction) {
    const container = document.getElementById('carousel');
    const card = container.querySelector('.profile-card');
    const gap = 20;
    const cardWidth = card.offsetWidth + gap;
    container.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
}