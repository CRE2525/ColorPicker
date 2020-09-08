
//vars

let num_of_sq = 6;
let colors = [];
let picked_color;

//selectors

let squares = document.querySelectorAll(".square");
let color_display = document.querySelector("#color_display");
let msg = document.querySelector("#msg");
let h1 = document.querySelector("h1");
let reset_button = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

//functions

function init(){

    //mode button event listeners
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected_button");
            modeButtons[1].classList.remove("selected_button");
            this.classList.add("selected_button");
            if (this.textContent == "ez mode"){
                num_of_sq = 3;
            } else {
                num_of_sq = 6;
            }
            reset();
        });
    }

    //setting up squares
    for (let i = 0; i < squares.length; i++) {
        //clickers
        squares[i].addEventListener("click", function() {
            if(squares[i].style.backgroundColor === picked_color) {
                msg.textContent = "correct!";
                change_all_squares();
                h1.style.backgroundColor = picked_color;
                reset_button.textContent = "play again";
            } else {
                squares[i].style.backgroundColor = "#242424";
                msg.textContent = "incorrect!";
            }
        });
    }

    //setting up reset listener
    reset_button.addEventListener("click", function(){
        reset();
    });

    reset();

    //creating title
    color_display.textContent = picked_color;
}

function change_all_squares() {
//Sets all squares to be the color of picked_color.
    for(let j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = picked_color;
    }
}

function color_picker() {
//Chooses random color from colors array to be the picked_color.
    return colors[Math.floor(Math.random() * colors.length)];
}

function get_rand_color() {
//generates random rbg(r, g, b) color
    let red_val = Math.floor(Math.random() * 256);
    let grn_val = Math.floor(Math.random() * 256);
    let blu_val = Math.floor(Math.random() * 256);
    return "rgb(" + red_val + ", " + grn_val + ", " + blu_val + ")";
}

function gen_rand_array(num_input) {
//creates a random array of colors of length num_input
    let arr = [];

    for(var k = 0; k < num_input; k++) {
        arr.push(get_rand_color());
    }

    return arr;
}

function reset() {
    colors = gen_rand_array(num_of_sq);
    picked_color = color_picker();
    color_display.textContent = picked_color;
    reset_button.textContent = "reset colors";
    msg.textContent = "";
    for(let i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "darkslategrey";
}

init();

// old click listeners for difficulty modes, cleaned up:

// ez_btn.addEventListener("click", function(){
//     num_of_sq = 3;
//     ez_btn.classList.add("selected_button");
//     pro_btn.classList.remove("selected_button");
//     colors = gen_rand_array(num_of_sq);
//     picked_color = color_picker();
//     color_display.textContent = picked_color;
//     for (let i = 0; i < squares.length; i++){
//         if(i < 3){
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// pro_btn.addEventListener("click", function(){
//     num_of_sq = 6;
//     pro_btn.classList.add("selected_button");
//     ez_btn.classList.remove("selected_button");
//     colors = gen_rand_array(num_of_sq);
//     picked_color = color_picker();
//     color_display.textContent = picked_color;
//     for (let i = 0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });


