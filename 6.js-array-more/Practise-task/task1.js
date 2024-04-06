const colors = ["red", "blue", "green", "yellow", "orange"];
const rev_colors = [];
for (const color of colors) {
  rev_colors.unshift(color);
}
// for (let i = colors.length-1; i >= 0; i--) {
//     console.log(colors[i])
// }
let len = colors.length-1;
while(len >=0){
    console.log(colors[len]);
    len--;
}
