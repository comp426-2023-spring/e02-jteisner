// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

document.addEventListener('DOMContentLoaded', () => {
    showHideShots();


});

async function playGame() {
    let gamemode = $('input[type=radio][name=game-choice]:checked').val();
    let shot = $('input[type=radio][name=shot]:checked').val();
    
    baseURL = window.location.href + 'app/';

    url = baseURL + gamemode + '/play/' + shot;

    console.log(url);
    opponent_checked = document.getElementById("opponent").checked;

    await fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(result){
        console.log(result);
        let result_element = document.getElementById("result");
        if (document.getElementById("opponent").checked){
            result_element.innerHTML = `<p>You chose: ${result.player}</p>
            <p>Your opponent chose: ${result.opponent}</p>
            <p>You ${result.result.toUpperCase()}</p>`;
        } else{
            result_element.innerHTML = result.player.toUpperCase();
        }
    });
}


function startOver() {
    location.reload()
}

function showHideShots() {
    let rpsls_button = document.getElementById('rpsls');
    let rps_button = document.getElementById("rps");
    let opponentCheckBox = document.getElementById('opponent');

    if(opponentCheckBox.checked){
        if(rpsls_button.checked){
            $(".rps-format").show();
            $(".rpsls-format").show();
        }
        if(rps_button.checked){
            $(".rps-format").show();
            $(".rpsls-format").hide();
        }
    }
    else{
        $(".rps-format").hide();
        $(".rpsls-format").hide();
    }

}

