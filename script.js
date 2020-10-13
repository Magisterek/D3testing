const svg = d3.select('svg');

let width = +svg.attr('width');
let height = +svg.attr('height');
console.log('width');
svg.append('circle');

const circle = svg.append('circle')
    .attr('r',100)
    .attr('cx',width/2)
    .attr('cy',height/2)
    .attr('fill', 'blue')
    .attr('stroke','black');

d3.csv('data.csv').then(data => {
    data.forEach(d => {
        d.population = +d.population;
    })
    console.log(data);

});





