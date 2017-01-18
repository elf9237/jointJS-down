(function() {
    
    var graph = new joint.dia.Graph;
    var paper = new joint.dia.Paper({ el: $('#paper-global-traffic'), width: 800, height: 400, gridSize: 1, model: graph });

    var chart = new joint.shapes.chart.Plot({
        position: { x: 80, y: 80 },
        size: { width: 650, height: 250 },
        series: [
            { name: 'total-traffic', label: 'Total IP Traffic (PetaByte per Month)', interpolate: 'bezier', data: [{ x: 2012, y: 43570 }, { x: 2013, y: 55553 }, { x: 2014, y: 68892 }, { x: 2015, y: 83835 }, { x: 2016, y: 101055 }, { x: 2017, y: 120643 } ] }
        ],
        axis: {
            'x-axis': { tickFormat: '.0f' },
            'y-axis': { ticks: 5, tickFormat: '.0f', tickSuffix: ' PB' }
        },
        markings: [
            { name: 'predicted-marking', label: 'Predicted', start: { x: 2014 } }
        ],
        padding: { top: 30, bottom: 50, left: 60, right: 120 },
        attrs: {
            '.caption': { text: 'Global IP Traffic Growth, 2012-2017', fill: '#6A9E04', 'font-weight': 'bold', 'ref-y': -50, ref: '.background', 'ref-x': .5 },
            '.background rect': { fill: '#34495E' },
            '.data .total-traffic path': {
                stroke: 'white', 'stroke-width': 1, 'stroke-dasharray': [1,1], 'fill-opacity': .2,
                fill: {
                    type: 'linearGradient',
                    stops: [ { offset: '0%', color: 'white' }, { offset: '80%', color: 'lightgray' } ],
                    attrs: { x1: '0%', y1: '0%', x2: '0%', y2: '100%' }
                }
            },
            '.y-axis .tick line': {
                x2: 650,  // Set the x2 coordinate of the SVG line element to the width of the graph so that the ticks cross the whole chart.
                opacity: .1
            },
            '.point': { display: 'none' },
            '.guideline': { 'stroke-dasharray': '3,1', 'stroke-width': .8, display: 'inline', opacity: .5 },
            '.x-guideline': { stroke: 'white' },
            '.y-guideline': { stroke: 'white' },
            '.legend text': {
                fill: 'white',
                'font-size': 10,
                style: { 'text-decoration': '1px 1px 0 gray' }
            },
            '.predicted-marking rect': { fill: 'white', 'stroke-width': .5, opacity: .7 },
            '.predicted-marking text': { fill: 'white', 'font-size': 10, dx: 50, dy: 20 }
        }
    });

    chart.legendPosition('nw');
    graph.addCell(chart);

    var chartView = paper.findViewByModel(chart);
    
    var t = new joint.ui.Tooltip({
        rootTarget: '[model-id="' + chart.id + '"]',
        target: '.point',
        content: function(elPoint) { return V(elPoint).findOne('text').node.textContent; },
        direction: 'left',
        padding: 20
    });

    t.$el.css({ 'background-color': 'white', 'text-shadow': 'none', color: 'black' });

    var elPoints = [];
    
    chartView.on('mouseover', function(dataPoint, clientPoint, closestPoints, evt) {

        _.each(elPoints, function(elPoint) { V(elPoint).remove(); });
        elPoints = [];
        var closestPoint = _.first(closestPoints);

        var elPoint = chartView.renderPoint(closestPoint, closestPoint.serie);
        elPoints.push(elPoint);
        V(elPoint).attr('pointer-events', 'none');
        V(elPoint).findOne('circle').attr({ r: 5, fill: 'white' });
        V(elPoint).findOne('text').attr({ display: 'none' });
        
        t.options.content = joint.util.format.number('.0f', dataPoint.y) + ' PB<br/>' + closestPoint.x + ': ' + closestPoint.y + ' PB';
        clientPoint.y += window.scrollY;
        t.render(clientPoint);

    });
    chartView.on('mouseout', function() {

        _.each(elPoints, function(elPoint) { V(elPoint).remove(); });
        t.hide();
    });
    
})()
