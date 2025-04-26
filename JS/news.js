function filterNews(category) {
    const allButtons = document.querySelectorAll('.filter-button');
    allButtons.forEach(button => button.classList.remove('active'));

    // Set active class on clicked button
    const activeButton = document.querySelector(`.filter-button[onclick="filterNews('${category}')"]`);
    activeButton.classList.add('active');

    const newsItems = document.querySelectorAll('.sub-news-item');
    newsItems.forEach(item => {
        // Tampilkan semua berita atau filter berdasarkan kategori
        if (category === 'all') {
            item.style.display = 'block';
        } else {
            const itemCategory = item.getAttribute('data-category');
            if (itemCategory === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
}
