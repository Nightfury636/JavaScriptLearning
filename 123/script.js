const stoneButton = document.querySelector(".stone");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");

const handleClick = function (char){
    let result = null;
    const cpuChart = getCpuChart();
    console.log('cpuChart', cpuChart)

    
    if(char == 'stone') {
        if(cpuChart == 'scissors'){
            result = 'Победа';
        }
        if(cpuChart == 'paper'){
            result = 'Поражение'
        }
        if(cpuChart == 'stone'){
            result = 'Ничья'
        }
    
    } else if (char == 'scissors') {
        if (cpuChart == 'scissors') {
            result = 'Ничья'
        }
        else if ( cpuChart == 'paper'){
            result = 'Победа'
        }
        else {
            result = 'Поражение'
        }

    } else if (char == 'paper'){
            if (cpuChart == 'paper'){
                result = 'Ничья'
            }
            if (cpuChart == 'stone'){
                result = 'Победа'
            }
            if (cpuChart == 'scissors'){
                result = 'Поражение'
            }
    }

    

    alert(result)
    
}


function getCpuChart() {
    const randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let cpuChart = null
    if(randomNumber == 1 ) {
        cpuChart = "stone"
    } else if (randomNumber == 2 ) {
        cpuChart = "scissors"
    } else {
        cpuChart = "paper"
    }
    

    return cpuChart
}

stoneButton.addEventListener("click", function() {
    handleClick('stone')
});

scissorsButton.addEventListener("click", function() {
    handleClick('scissors')
});

paperButton.addEventListener("click", function() {
    handleClick('paper')
});


