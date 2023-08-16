
//Generates Random Number
const randomNum = (len) => {
    let randlen = Math.floor(Math.random() * len);
    return randlen;
}

//Options for selecting workout plan and protien type 
const option = {
    workout: ['Shoulder', 'Leg', 'Chest', 'Biceps', 'Triceps', 'Lat', 'Abs'],
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    protien: ['Plant based', 'Animal based', 'Organic', 'Lean Mass']
}

//Has the output
let workoutPlan = [];

//Iteration over the object
for (items in option) {
    let optidx = randomNum(option[items].length);
    console.log(optidx);
    switch(items) {
        case 'workout':
            workoutPlan.push(`You should work on ${option[items][optidx]}.`);
            break
        case 'days':
            workoutPlan.push(`On ${option[items][optidx]}.`);
            break
        case 'protien':
            workoutPlan.push(`While doing this, consume ${option[items][optidx]} protien.`);
            break
        default:
            console.log('Error'); 
    }

}

function output(result) {

    let plan = result.join('\n');
    console.log(plan);
}

output(workoutPlan);