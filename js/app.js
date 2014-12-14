// make a data table with the data in VideoData
$(document).ready(function() {
// find me the tag called Datatable
    $('#video-links-table').DataTable({
        "data": VideoData,
        "columnDefs": [
            {
                "render": function(data) {
                    return '<a target="_blank" href="'+data+'">'+data+'</a>';
                },
                "targets": 3
            }
        ],
        "initComplete": function () {
            var api = this.api();

            api.columns().indexes().flatten().each( function ( i ) {
                var column = api.column( i );
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' )
                } );
            } );
        }
    })
});

