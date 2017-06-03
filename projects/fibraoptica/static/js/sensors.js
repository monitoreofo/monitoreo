$(document).ready(function () {
    var atenuacion = {
        x: [],
        y: [],
        fill: 'tonexty',
        type: 'scatter',
        name: 'ATENUACION'
    };


    var fuerza = {
        x: [],
        y: [],
        fill: 'tonexty',
        type: 'scatter',
        name: 'FUERZA DE TRACCION',
        yaxis: 'y2'
    };

    var layout = {
        title: 'Monitoreo de fibra optica',
        showlegend: true,
        legend: {
            x: 0,
            y: 1,
            traceorder: 'normal',
            font: {
                family: 'sans-serif',
                size: 12,
                color: '#000'
            },
            bgcolor: '#E2E2E2',
        },
        yaxis: {
            title: 'dB',
            range: [0, 50]
        },
        yaxis2: {
            title: 'Newton',
            side: 'right',
            overlaying: 'y',
            range: [0, 500]
        }
    };

    var data = [fuerza, atenuacion];

    var updateInterval = 1000;
    // Load all posts on page load
    function GetData() {
        $.ajax({
            url: "/api/sensors/", // the endpoint
            type: "GET", // http method
            // handle a successful response
            success: function (data) {
               
                results = data['results'];
                atenuacion['x'] = [];
                atenuacion['y'] = [];

                fuerza['x'] = [];
                fuerza['y'] = [];

                $.each(results, function (index, value) {
                    atenuacion['x'].push(new Date(value['date_created']));
                    atenuacion['y'].push(value['atenuacion']);

                    fuerza['x'].push(new Date(value['date_created']));
                    fuerza['y'].push(value['fuerza']);
                });
            },
            // handle a non-successful response
            error: function (xhr, errmsg, err) {

            }
        });

    };

    function update() {
        GetData();

        if (document.getElementById("myCheck").checked) {
            Plotly.newPlot('placeholder', data, layout);
            document.getElementById('lblLast').innerHTML = "Atenuacion Actual: " +
                atenuacion['y'][0] + "<br>Fuerza de Traccion  Actual: " + fuerza['y'][0];
        }
        var interval = Number(document.getElementById("interval").value);
        if (!isNaN(interval)) {
            updateInterval = interval;
        }
        setTimeout(update, updateInterval);
    }

    update();
});
