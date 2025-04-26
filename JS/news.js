function filterNews(category) {
    const allButtons = document.querySelectorAll('.filter-button');
    allButtons.forEach(button => button.classList.remove('active'));

    const activeButton = document.querySelector(`.filter-button[onclick="filterNews('${category}')"]`);
    activeButton.classList.add('active');

    const newsItems = document.querySelectorAll('.sub-news-item');
    newsItems.forEach(item => {
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
