function superbowlWin(arr) {
    let result = arr.find(arr => arr.result === "W");
    if (result){
        return result.year;
    }
}