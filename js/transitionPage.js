let clickRow = function() {
    $('table').on('click', 'tr', function() {
        let childNum = $(this).index();
        if ( childNum > 0) {
            let id = $(this).attr('data-url');
            window.location=id;
        }
    });
};

clickRow();