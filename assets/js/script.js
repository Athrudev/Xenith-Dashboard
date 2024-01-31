// Graph using plotly
const xArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const yArray = [50,60,80,70,90,90,80,110,120,115,125,130];
const data = [{
  x: xArray,
  y: yArray,
  mode:"lines"
}];
const layout = {
  xaxis: { type: 'category', title: "Months" },
  yaxis: {range: [0, 200], tickvals: [0, 50, 100, 150, 200], title: "Revenue"},  
  title: "Earnings"
};
const config = { displayModeBar: false };
Plotly.newPlot("myPlot", data, layout,config);

window.onresize = function() {
    Plotly.Plots.resize("myPlot");
};

// sidebar
const navbar = document.querySelector("#sidebar .navbar");
const menuButton = document.querySelector("#sidebar > button");
const backButton = document.querySelector("#sidebar .navbar button");
menuButton.addEventListener("click",()=>{
  navbar.classList.add("appear");
});
backButton.addEventListener("click",()=>{
  navbar.classList.add("disappear");
  setTimeout(()=>{
    navbar.classList.remove("appear");
    navbar.classList.remove("disappear");
  },450);
});