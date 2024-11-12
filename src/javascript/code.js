let pageIndex = 0; //the index of the current page in the array
let currentIndex = 0;

let prev = document.getElementById("prev"); //get HTML element variables
let next = document.getElementById("next");
let frame = document.getElementById("content");

const constitution_pages = [ //an array of the pages of the constitution in order according to their index in the array
    "resources/pages/preamble.html",
    "resources/pages/articles/article_one.html",
    "resources/pages/articles/article_two.html",
    "resources/pages/articles/article_three.html",
    "resources/pages/articles/article_four.html",
    "resources/pages/articles/article_five.html",
    "resources/pages/articles/article_six.html",
    "resources/pages/articles/article_seven.html",
    "resources/pages/amendments/first_amendment.html",
    "resources/pages/amendments/second_amendment.html",
    "resources/pages/amendments/third_amendment.html",
    "resources/pages/amendments/fourth_amendment.html",
    "resources/pages/amendments/fifth_amendment.html",
    "resources/pages/amendments/sixth_amendment.html",
    "resources/pages/amendments/seventh_amendment.html",
    "resources/pages/amendments/eighth_amendment.html",
    "resources/pages/amendments/ninth_amendment.html",
    "resources/pages/amendments/tenth_amendment.html",
    "resources/pages/amendments/eleventh_amendment.html",
    "resources/pages/amendments/twelfth_amendment.html",
    "resources/pages/amendments/thirteenth_amendment.html",
    "resources/pages/amendments/fourteenth_amendment.html",
    "resources/pages/amendments/fifteenth_amendment.html",
    "resources/pages/amendments/sixteenth_amendment.html",
    "resources/pages/amendments/seventeenth_amendment.html",
    "resources/pages/amendments/eighteenth_amendment.html",
    "resources/pages/amendments/nineteenth_amendment.html",
    "resources/pages/amendments/twentieth_amendment.html",
    "resources/pages/amendments/twenty-first_amendment.html",
    "resources/pages/amendments/twenty-second_amendment.html",
    "resources/pages/amendments/twenty-third_amendment.html",
    "resources/pages/amendments/twenty-fourth_amendment.html",
    "resources/pages/amendments/twenty-fifth_amendment.html",
    "resources/pages/amendments/twenty-sixth_amendment.html",
    "resources/pages/amendments/twenty-seventh_amendment.html"
];
//I could have just shortened the names to their respective numbers within the folders
//and use a simple sorting algorithm, but for now I'd rather have it like this.


function setPage(direction, button) { //tries to increment the page to the next one in the given direction
    pageIndex = Math.min(Math.max(pageIndex+direction, 0), constitution_pages.length); //increment & clamp the value within the pages range
    
    if (pageIndex == 0 || pageIndex == pageIndex.length-1) button.setAttribute("disabled", true); else ((button == prev) ? next : prev).removeAttribute("disabled");

    let page = constitution_pages[pageIndex];
    frame.src = page;
}

function getIndex(pageName) {
    if (pageName == null) return;

    for (let i=0; i<constitution_pages.length; i++) {
        let document = constitution_pages[i];
        let documentName = document.split("/").pop();
        
        if (pageName == documentName) {
            console.log(pageName);
            return i;
        }
    }
}


frame.onload = function() { //resize frame when it updates
    frame.style.height = "0px"; //a little hacky, but resets the frame when its first updates in order to accurately get the new size
    let document = frame.contentDocument || frame.contentWindow.document;

    let index = getIndex(document.location.pathname.split("/").pop());
    if (index != null) pageIndex = index;
    
    frame.style.height = (document.body.scrollHeight + 'px');
}

prev.onclick = x => setPage(-1, prev);
next.onclick = x => setPage(1, next);