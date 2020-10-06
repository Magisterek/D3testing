var dane = [];
let text = d3.select("#pojemnik")
    .selectAll("div")
    .data(dane)
    .enter()
    .append("div")