"use strict";
let barWidth = 50;
let barSpace = 10;
let svgWidth = (barWidth + barSpace) * data.length - barSpace;
let svgHeight = 700;
let dataMax = d3.max(data, d => d["votes"]);
let scale = d3.scaleLinear()
    .domain([0, dataMax])
    .range([0, svgHeight]);
let svg = d3.select("body").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", barWidth)
    .attr("height", d => scale(d["votes"]))
    .attr("x", (d, i) => (barWidth+barSpace)*i)
    .attr("y", d => svgHeight-scale(d["votes"]));