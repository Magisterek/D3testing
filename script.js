"use strict";
let barWidth = 15;
let barSpace = 5;
let svgWidth = barWidth + barSpace * data.length - barSpace;
let svgHeight = 50;
let dataMin = d3.min(data, d => d["votes"]);
let dataMax = d3.max(data, d => d["votes"]);
let scale = d3.scale.linear()
    .domain(dataMin, dataMax)
    .range(0, 50);
let svg = d3.select("body").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", barWidth)