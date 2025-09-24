const ProfileCard = ({ name, age = 1000, hobbies }) => {
    return (
        <div className="bg-pink-50 border border-pink-600 p-3 rounded-2xl">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Hobbies: {hobbies}</p>
        </div>
    );
};

export default ProfileCard;
