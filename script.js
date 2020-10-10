"use strict";
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})
let barWidth = 100;
let barSpace = 10;
let svgWidth = (barWidth + barSpace) * data.length - barSpace + 50;
let svgHeight = 1000;
let barHeight = 600;
let dataMax = d3.max(data, d => d["votes"]);
let scale = d3.scaleLinear()
    .domain([0, dataMax])
    .range([0, barHeight]);
let svg = d3.select("body").append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);
svg.selectAll("rect").data(data).enter().append("rect")
    .attr("width", barWidth)
    .attr("height", d => scale(d["votes"]))
    .attr("x", (d, i) => (barWidth+barSpace)*i)
    .attr("y", d => barHeight-scale(d["votes"]))
    .attr("data-toggle", "tooltip")
    .attr("data-placement", "top")
    .attr("title", d => d["votes"]);

svg.selectAll("text").data(data).enter().append("text")
    .text((d, i) => (i+1) + ". " + d["name"])
    .attr("x", (d, i) => (barWidth+barSpace)*i+barWidth/4)
    .attr("fill", "black")
    .attr("y", barHeight+15)
    .attr("font-family", "sans-serif")
    .attr("font-size", "16px")
    .attr("transform", (d, i) => "rotate(60 " + ((barWidth+barSpace)*i+barWidth/3) + " " + (barHeight+15) +")");