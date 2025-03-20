//console.log("Starting message mixer project");
//console.log("Finish setting up the git file path, repository, and github path");

// this javascript project outputs randoms messages everytime the user runs the program. 
// the program must be run in the terminal using node.js
// the program should output at least 3-4 messages
// the variable part of the displayed message should be random and options stored in object array


// Message 1: "Today I'm feeling like eating [random food] for dinner"
// Message 1_options: food options = ["pizza", "pasta", "tacos", "burger", "salad", "sushi", "sandwhich"]


// Message 2: The forecast for next week weather is [random weather]
// Message 2_options: weather options = ["sunny", "cloudy", "rainy", "snowy", "windy", "stormy", "foggy"]

// Message 3: This weekend I'm going to [random activity]
// Message 3_options: activity_options = ["go to the beach", "play soccer", "play tennis", "go on a date", "to the park"]

const promtOptions = {
    food: ["pizza", "pasta", "tacos", "burger", "salad", "sushi", "sandwhich"],
    weather: ["sunny", "cloudy", "rainy", "snowy", "windy", "stormy", "foggy"],
    activity: ["go to the beach", "play soccer", "play tennis", "go on a date", "to the park"]

}

let food_option;
let weather_option;
let activity_option;

const promtSelection = (array) => {
    let randomIndex;
    for (let option in array) {
        //console.log(option);
        randomIndex = Math.floor(Math.random()*array[option].length);
        //console.log(randomIndex);
        if (option === 'food'){
            console.log(`Today I'm feeling like eating ${array[option][randomIndex]} for dinner`);

        } else if (option === 'weather'){
            console.log(`The forecast for next week weather is ${array[option][randomIndex]}`);

        } else if (option === 'activity') {
            console.log(`This weekend I'm going to ${array[option][randomIndex]}`)

        }
    }
}

/*for (let options in promtOptions) {
    console.log(options);
    console.log(promtOptions[options]);
    console.log(promtOptions[options].length)
}*/

promtSelection(promtOptions);

