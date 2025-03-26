document.addEventListener('DOMContentLoaded', function filterMushrooms() {
    const mushroomCards = document.querySelectorAll('.mushroom-guide .card');
    const seasonalSelect = document.querySelector('#season');
    const edibleSelect = document.querySelector('#edible');
    const noResultsMsg = document.querySelector('.no-matches');

    const currentFilters = {
        season: 'all',
        edible: 'all',
    };

    seasonalSelect.addEventListener('change', updateFilter);
    edibleSelect.addEventListener('change', updateFilter);

    function updateFilter(event) {
        const filterType = event.target.name;
        currentFilters[filterType] = event.target.value;+

        filterCards();
    }

    function filterCards() {
        let hasVisibleCards = false;

        mushroomCards.forEach((card) => {
            const season = card.querySelector('[data-season]').dataset.season;
            const edible = card.querySelector('[data-edible]').dataset.edible;

            const matchesSeason = currentFilters.season == season;
            const matchesEdible = currentFilters.edible == edible;

            if ((matchesEdible || currentFilters.edible == 'all') && (matchesSeason || currentFilters.season == 'all')) {
                card.hidden = false;
                hasVisibleCards = true;
            } else {
                card.hidden = true;
            }

            if (hasVisibleCards) {
                noResultsMsg.hidden = true;
            } else {
                noResultsMsg.hidden = false;
            }
        });
    }
});