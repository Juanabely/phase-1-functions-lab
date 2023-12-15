// Code your solution in this file!

function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(hqLocation - pickupLocation);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    const blocksTravelled = Math.abs(destinationBlock - startBlock);
    return blocksTravelled * 264;
}

function calculatesFarePrice(startBlock, destinationBlock) {
    const feetTravelled = distanceTravelledInFeet(startBlock, destinationBlock);

    if (feetTravelled <= 400) {
        return 0; 
    } else if (feetTravelled <= 2000) {
        
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled > 2000 && feetTravelled <= 2500) {
        return 25; 
    } else {
        return 'cannot travel that far';
    }
}

console.log(distanceFromHqInBlocks(43)); 

console.log(distanceFromHqInFeet(43)); 

console.log(distanceTravelledInFeet(43, 48));  

console.log(calculatesFarePrice(34, 32)); 