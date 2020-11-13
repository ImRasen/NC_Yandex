/**
 * Adds a new line of Zen-news to the bottom of th web page
 * in 0.8 sec as user scrolls to the bottom
 * (end of the document is 200px down)
 */

function addZen() {
    if (document.documentElement.getBoundingClientRect().bottom <
        document.documentElement.clientHeight + 200
    ) {
        let zenElements = document.body.getElementsByClassName("page__feed");
        setTimeout(function () {
            zenElements[zenElements.length - 1].insertAdjacentHTML("beforeend",
                '<div class="page__feed-line zen">' +
                '        <div class="zen__item"></div>' +
                '        <div class="zen__item"></div>' +
                '        <div class="zen__item"></div>' +
                '    </div>'
            );
        }, 800);
    }
}

window.addEventListener('scroll', addZen);