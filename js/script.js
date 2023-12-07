const filters = document.querySelectorAll(".anime__container-filters-list")

// const genres = document.getElementById("genres");
// const styles = document.getElementById("artistic_styles");
// const community = document.getElementById("community");
// const cosplay = document.getElementById("cosplay");
// const manga = document.getElementById("manga");
// const anime = document.getElementById("anime");

// function disableActive(e) {
//     e.forEach(value => {
//         console.log(value);
//     });
// }

filters.forEach(value => {
    value.addEventListener('click', e => {
        // disableActive(filters);
        console.log(e.target);
    })
})

console.log(filters);
