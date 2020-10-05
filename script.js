var tablica = [0, 5, 1, 6, 2];
d3.select("body")
    .selectAll("p")
    .data(tablica)
    .text((d)=>"Wcześniej instniejący akapit " +d)
    .enter().append("p")
    .text((d)=>"Wygenerowany akapit " + d);