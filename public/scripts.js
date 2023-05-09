// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

document.addEventListener('DOMContentLoaded', () => {
    showHideShots();


});

async function playGame() {
    $(".gamemode-format").hide()
    $(".rps-format").hide();
    $(".rpsls-format").hide();

    shot = document.querySelector('input[type="radio"][name*="shot"]:checked').value;
    console.log(shot);

    let game_mode = document.getElementById("rps") ? "rps" : "rpsls";
    let opponent = document.getElementById('opponent');
    if (opponent.checked){
        let response = await fetch(window.location.href + 'app/' + game + '/play' + shot);
        let result = await response.json();
        console.log(result);

        let results = document.getElementById('results');
        if (result.error){
            results.innerHTML = result.error;
        } else {
            result_message.innerHTML = `<p>You: ${result.player}</p>
                    <p>Your opponent: ${result.opponent}</p>
                    <p>Result: You ${result.result.toUpperCase()}</p>`;
        }
    } else{
        shot = 'rock'
    }
        

    //let rps_url = `${document.baseURI}/app/${game_mode}/play/${shot}/`;


    // await fetch(rps_url)
   //     .then(function(response) {
    //        return response.json();
    //    })
    //    .then(function(result){
    //        console.log(result);
    //        let result_message = document.getElementById("result");
   //         if (document.getElementById('opponent').checked){
   //             result_message.innerHTML = `<p>You: ${result.player}</p>
    //                <p>Your opponent: ${result.opponent}</p>
    //                <p>Result: You ${result.result.toUpperCase()}</p>`;
    //        }
     //       else{
   //             result_message.innerHTML = result.player.toUpperCase();
//
    //        }
 //       });
//}

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

