const tech = [
    {label: 'HTML'},
    {label: 'CSS'},
    {label: 'JavaScript'},    
    {label: 'Node.js'},
    {label: 'React'},
    {label: 'Vue' },
    {label: 'Next.js'},
    {label: 'Mobx'},
    { label: 'Redux' },
    {label: 'React Router' },
    {label: 'GraphQ'},
    {label: 'PostgerSQL'},
    {label: 'MongoDB'},
];

//Шаблон разметки
/* 
<form class="search-form js-search-form">
    <div class="search-input-wrapper">
        <label class="search-label"
        >Input example for searching:
        <input class="search-input" type="text" name="example" />
        </label>

        <button
        class="search-button js-search-button"
        type="button"
        disabled
        >
        Search
        </button>
    </div>
</form>
<ul class="js-searching-result"></ul>
 */

const refs = {
    list: document.querySelector('.searching-result'),
    input: document.querySelector('.search-input'),
};

refs.input.addEventListener('input', onFilterChange);

// console.log(listItemsMarkup);

const searchingRresultRef = document.querySelector('.js-searching-result');

const listItemsMarkup = createListItemsMarkUp(tech);
populateList(listItemsMarkup)

function createListItemsMarkUp(items) {
    return items.map(item => {
        return `
        <li class="search-item">${item.label}</li>`;
    }).join('');
}

function onFilterChange(event) {
    // console.log(event.target.value);
    const example = event.target.value;
    const filteredList = tech.filter(item =>
        item.label.toLowerCase().includes(example));
    
    const filteredListMarkUp = createListItemsMarkUp(filteredList);
    //console.log(filteredListMarkUp);
    populateList(filteredListMarkUp);
}

function populateList(listMarkup) {
    searchingRresultRef.innerHTML = listMarkup;
}