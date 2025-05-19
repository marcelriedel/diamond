/* Sortable table with list.js */
var listOptions = {
  valueNames: [ 
    'model', 
    'embargo',
    { attr: 'data-title', name: 'title' }, 
    'publisher'
  ]
};

var journalsList = new List('journals-list', listOptions);

/* Filter out embargoed journals (on by default */
function embargoFilter(item) {
  if (item.values().embargo < 1) {
     return true;
  } else {
     return false;
  }
}

window.addEventListener('load', function() {
  journalsList.filter(embargoFilter);
})

embargoFilterControl = document.getElementById("embargo-filter-control");
embargoFilterControl.addEventListener('change', function() {
  if (this.checked) {
    journalsList.filter(); // N.B. only works as long as there's one filter
  } else {
    journalsList.filter(embargoFilter);
  }
});

/* Turn on disabled controls */
searchControls = document.getElementById("journals-list").getElementsByClassName("search");
Array.from(searchControls).forEach((element) => {
  element.disabled = false;
});

sortControls = document.getElementById("journals-list").getElementsByClassName("sort");
Array.from(sortControls).forEach((element) => {
  element.disabled = false;
});

filterControls = document.getElementById("journals-list").getElementsByClassName("filter");
Array.from(filterControls).forEach((element) => {
  element.disabled = false;
});
