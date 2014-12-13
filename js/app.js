$(document).ready(function() {

    $('#video-links-table').DataTable({
        data: VideoData,
        columnDefs: [
            {
                render: function(data) {
                    return '<a target="_blank" href="'+data+'">'+data+'</a>';
                },
                targets: 3
            }
        ]
    })
});