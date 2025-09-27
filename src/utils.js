export function getImageUrl(person, size = "s") {
    return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

export const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
};

export const autoReplies = [
    "Thanks for reaching out! I'll get back to you as soon as possible.",
    "Got your message — I'm reviewing it now and will respond shortly.",
    "Hi there! I'm currently unavailable but will reply as soon as I can.",
    "Thanks for your message. We'll be with you shortly!",
    "Appreciate you getting in touch! One of our team members will respond soon.",
    "Your message has been received — we're on it!",
    "Hey! Just a heads-up, responses may be delayed. Thanks for your patience!",
    "I'm away at the moment but I’ll circle back to you shortly.",
    "You're in the queue! A team member will assist you as soon as possible.",
    "Thanks for contacting us! We usually respond within 24 hours.",
    "Hi! We’ve received your request and are looking into it.",
    "Message received. Sit tight — we’ll be right with you!",
    "Thank you! We’re currently reviewing your message and will follow up soon.",
    "Hello! Just letting you know your message didn’t go unnoticed.",
    "We’re working on it! Expect a reply shortly.",
    "Busy helping others at the moment, but you're next!",
    "Thanks for your patience — help is on the way!",
    "Hi! We're processing your request. Hang tight!",
    "Auto-reply: We've received your message. We'll get back to you soon.",
    "Thanks for the heads-up. We'll take care of it!",
];
