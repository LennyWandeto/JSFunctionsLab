// Code your solution in this file!

function distanceFromHqInBlocks(location) {
    let blocks = Math.abs(location - 42);
    return blocks
}

function distanceFromHqInFeet(location) {
    let feet = Math.abs((location - 42)) * 264
    return feet
}

function distanceTravelledInFeet(start, destination) {
    let feet = Math.abs((destination - start)) * 264
    return feet
}

function calculatesFarePrice(start, destination) {
    let feet = Math.abs((destination - start) * 264)
    if (feet < 400) {
        let fare = 0;
        return fare;
    } else if (feet >= 400 && feet < 2000) {
        let feetNew = feet - 400;
        let 
        fare = feetNew * 0.02;
        return fare;

    } else if (feet > 2500) {
        return "cannot travel that far"
    } else {
        return 25
    }
}