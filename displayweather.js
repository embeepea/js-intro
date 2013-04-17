$(document).ready(function() {

    var year = '2010',
        month = '04',
        day = '23',
        station_id = 'USW00013723';

    $('td.year div').click(function() {
        year = $(this).attr('class');
        updateChoices();
    });

    $('td.month div').click(function() {
        month = $(this).attr('class');
        updateChoices();
    });

    $('td.day div').click(function() {
        day = $(this).attr('class');
        updateChoices();
    });

    function updateChoices() {
        $('td.year div').css({'background-color' : '#ffffff'});
        $('td.year .'+year).css({'background-color' : '#ff0000'});
        $('td.month div').css({'background-color' : '#ffffff'});
        $('td.month .'+month).css({'background-color' : '#ff0000'});
        $('td.day div').css({'background-color' : '#ffffff'});
        $('td.day .'+day).css({'background-color' : '#ff0000'});
        $('td.station div').css({'background-color' : '#ffffff'});
        $('td.station .'+station_id).css({'background-color' : '#ff0000'});
        $('table.results span.date').text(year + '-' + month + '-' + day);
        $.ajax({
            url        : 'getstation.php?id=' + station_id,
            dataType   : 'json',
            success    : function(station) {
                $('table.results td.name').text(station.name);
                $('table.results td.station_id').text(station.id);
                $('table.results td.lat').text(station.lat);
                $('table.results td.lon').text(station.lon);
                $('table.results td.elev').text(station.elev);
                $('table.results td.state').text(station.state);
            }
        });
        $.ajax({
            url        : 'getweather.php?id=' + station_id + '&year=' + year + '&month=' + month + '&day=' + day,
            dataType   : 'json',
            success    : function(weather) {
                $('table.results td.temp').text(weather.temp);
                $('table.results td.prcp').text(weather.prcp);
            }
        });
    }

    $.ajax({
        url        : 'getstation.php',
        dataType   : 'json',
        success    : function(stations) {
            for (i=0; i<stations.length; ++i) {
                $('table.calendar td.station').append($('<div class="'+stations[i].id+'">'+stations[i].name+'</div>'));
            }
            $('td.station div').click(function() {
                station_id = $(this).attr('class');
                updateChoices();
            });
            updateChoices();
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }
    });


});
