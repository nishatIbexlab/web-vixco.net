
function buyTerminalMain() {
    var terminalHeaderClass = document.querySelectorAll(".new-notice-terminal-header");
    var terminalDetails = document.querySelectorAll(".terminal-details");
    var textIconColor = document.querySelectorAll(".textIconColor");
    var icon = document.getElementsByClassName("h-5 w-5");
    if (terminalDetails[0].style.display === "none") {
        terminalDetails[0].style.display = "block";
        terminalDetails[1].style.display = "none";
        terminalHeaderClass[0].style.backgroundColor ="#19B9EB";
        terminalHeaderClass[1].style.backgroundColor ="#E4F4F9";
        textIconColor[0].style.color ="white";
        textIconColor[1].style.color ="white";
        textIconColor[2].style.color ="#475166";
        textIconColor[3].style.color ="#475166";
        icon[0].style.color="white";
        icon[1].style.color="#475166";
        icon[0].style.transform = 'rotate(180deg)';
        icon[1].style.transform = 'rotate(0deg)';
    } else {
        terminalDetails[0].style.display = "none";
        terminalHeaderClass[0].style.backgroundColor ="#E4F4F9";
        textIconColor[0].style.color ="#475166";
        textIconColor[1].style.color ="#475166";
        icon[0].style.color="#475166";
        icon[0].style.transform = 'rotate(0deg)';
    }
  }

  
function turnOffTerminalMain() {
    var terminalHeaderClass = document.querySelectorAll(".new-notice-terminal-header");
    var terminalDetails = document.querySelectorAll(".terminal-details");
    var textIconColor = document.querySelectorAll(".textIconColor");
    var icon = document.getElementsByClassName("h-5 w-5");
    if (terminalDetails[1].style.display === "none") {
        terminalDetails[0].style.display = "none";
        terminalDetails[1].style.display = "block";
        terminalHeaderClass[0].style.backgroundColor ="#E4F4F9";
        terminalHeaderClass[1].style.backgroundColor ="#19B9EB";
        textIconColor[0].style.color ="#475166";
        textIconColor[1].style.color ="#475166";
        textIconColor[2].style.color ="white";
        textIconColor[3].style.color ="white";
        icon[0].style.color="#475166";
        icon[1].style.color="white";
        icon[0].style.transform = 'rotate(0deg)';
        icon[1].style.transform = 'rotate(180deg)';
    } else {
        terminalDetails[1].style.display = "none";
        terminalHeaderClass[1].style.backgroundColor ="#E4F4F9";
        textIconColor[2].style.color ="#475166";
        textIconColor[3].style.color ="#475166";
        icon[1].style.color="#475166";
        icon[1].style.transform = 'rotate(0deg)';
    }
  }