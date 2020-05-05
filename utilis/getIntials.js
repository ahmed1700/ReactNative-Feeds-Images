export default function getIntialis(fullName) {
    let arrayWords = fullName.split(" ");
    const intialFullName = arrayWords[0].substr(0, 1) + arrayWords[1].substr(0, 1);
    return intialFullName;
}