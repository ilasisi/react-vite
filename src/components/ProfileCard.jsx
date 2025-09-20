export const ProfileCard = ({ name, age, hobbies }) => {
    return (
        <div className="bg-white rounded-xl p-5">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hobbies: {hobbies.join(" | ")}</p>
        </div>
    );
};
