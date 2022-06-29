function email() {
    var input = "nikolas.papenfus@wp.pl";
    navigator.clipboard.writeText(input);
     
    var tooltip = document.getElementById("myTooltip");
  	tooltip.innerHTML = "Copied!";
}

function phone() {
    var input2 = "+48 603 470 010";
    navigator.clipboard.writeText(input2);
     
    var tooltip2 = document.getElementById("myTooltip2");
  	tooltip2.innerHTML = "Copied!";
}

function out() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function out2() {
    var tooltip = document.getElementById("myTooltip2");
    tooltip.innerHTML = "Copy to clipboard";
  }