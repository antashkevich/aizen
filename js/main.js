let changeRowInput = function() {
    let tables = document.querySelector('.opportunityRisks-tables');
    tables.addEventListener('click', function(e){
        currentTag = e.target;
        currentTagName = currentTag.tagName;
    
        while (currentTagName !== 'TR') {
            currentTag = currentTag.parentNode;
            currentTagName = currentTag.tagName;
        }
        let rowTable = currentTag;
        let checkbox = rowTable.querySelector('.table_selection-checkbox input');
        if (checkbox.checked) {
            checkbox.checked = false;
        } else {
            checkbox.checked = true;
        }
        showPopup();
    });
}

let showPopup = function() {
    let hideSection = document.querySelector('.wr-observ-period.head-page');
    let checkBoxes = document.querySelectorAll('.table_selection-checkbox input');
    
    let arr = [];
    for (let i = 0; i < checkBoxes.length; i++) {        
        if (checkBoxes[i].checked) {
            arr.push(1);
            hideSection.style.display = 'block';
        } else {
            arr.push(0);
        }              
    }
    if (arr.indexOf(1) === -1 ) {
        hideSection.style.display = 'none';
    }
};

changeRowInput();
