const allEvens = array => {
    if (array.every(a => a % 2 === 0) === true) {
        return true;
    } else {
        return false;
    }
}