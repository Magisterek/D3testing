const tytul = 'Inflacja w Polsce';
const dolnyTekst= 'Procent';

const svg = d3.select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

function magia(data){
    function xValue(d){
        return d['inflacja'];
    }
    function yValue(d){
        return d.rok;
    }
    const margin = { top: 100, right: 40, bottom: 77, left: 150 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
        .domain([-3, d3.max(data, xValue)])
        .range([0, innerWidth]);

    const yScale = d3.scaleBand()
        .domain(data.map(yValue))
        .range([0, innerHeight])
        .padding(0.1);

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const xAxisTickFormat = d3.format("");

    const xAxis = d3.axisBottom(xScale)
        .tickFormat(xAxisTickFormat)
        .tickSize(-innerHeight);
    g.append('g')
        .call(d3.axisLeft(yScale))
        .selectAll('.domain, .tick line')
        .remove();

    const xAxisG = g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`);

    xAxisG.select('.domain').remove();

    g.append('text')
        .attr('class', 'tytul')
        .attr('y', -30)
        .text(tytul);

    xAxisG.append('text')
        .attr('class', 'dolny')
        .attr('y', 75)
        .attr('x', innerWidth / 2)
        .text(dolnyTekst);

    g.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('y', d => yScale(yValue(d)))
        .attr('width', d => xScale(xValue(d)))
        .attr('height', yScale.bandwidth());
}

d3.csv('data.csv').then(data => {
    data.forEach(d => {
        d.inflacja = +d.inflacja;

    })
    magia(data);
})