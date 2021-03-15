module.exports = function toReadable (number) {
    const first = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    let word = '';
    if (number === 0) return 'zero';
    if (number > 0 && number < 20) {
        return first[number];
    } else if (number >= 20 && number < 100) {
        const firstNumber = Math.floor(number / 10);
        const secondNumber = number - (firstNumber * 10);
            word =`${tens[firstNumber]} ${first[secondNumber]}`;
            return word.trim();
    } else if (number >= 100 && number < 1000){
        const firstNumber = Math.floor(number / 100);
        if (number % 100 === 0) {
            word = `${first[firstNumber]} hundred`;
            return word.trim();
        }
        const tenNumber = number - (firstNumber * 100);
        if (tenNumber >= 1 && tenNumber < 20) {
            word = `${first[firstNumber]} hundred ${first[tenNumber]}` ;
            return word.trim();
        }
        const secondNumber = Math.floor(tenNumber / 10);
        const thirdNumber = tenNumber - (secondNumber * 10);
            word = `${first[firstNumber]} hundred ${tens[secondNumber]} ${first[thirdNumber]}`;
            return word.trim();
    }
}
