export const capitalizeFirstLetter = (name, indexing = "") => {
    // Split the name into an array of words
    const words = name.split(' ');

    // Capitalize the first letter of each word and join them back into a string
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    if (indexing !== "") {
        return capitalizedWords[indexing];
    } else {
        // Join the array back into a single string
        return capitalizedWords.join(' ');
    }


}