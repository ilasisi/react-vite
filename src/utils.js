export function getImageUrl(person, size = "s") {
    return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

export const getImageLink = (path, width = 500) => {
    return `https://image.tmdb.org/t/p/w${width}${path}`;
};

export const formatMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    let result = "";
    if (hours > 0) result += `${hours}h `;
    if (minutes > 0) result += `${minutes}m`;
    return result.trim();
};
