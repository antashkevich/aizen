let hoverRow = function (id) {
    id = '#' + id + ' ' + 'table tr';
        $(id).hover(
            function() {
                let childNum = $(this).index() + 1;
                let rowNnum = id + ':nth-child(' + childNum + ')';
                let rowTable = $(rowNnum);
                if ( childNum > 1) {
                    rowTable.css('background', 'rgba(28, 55, 104, 0.1)');
                }       
            }, 
            function() {
                let childNum = $(this).index() + 1;
                let rowNnum = id + ':nth-child(' + childNum + ')';
                let rowTable = $(rowNnum);
                rowTable.css('background', '');
            }
        );
    }
    
    hoverRow('table1');
    hoverRow('table2');