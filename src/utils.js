export function getImageUrl(person, size = "s") {
    return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

export const getImageLink = (path, width = 500) => {
    return `https://image.tmdb.org/t/p/w${width}${path}`;
};
