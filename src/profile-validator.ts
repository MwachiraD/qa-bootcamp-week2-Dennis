type UserProfile = {
    id: number;
    username: string;
    settings?: {        
        notifications?: boolean;
    };
};
let user1: UserProfile = {
    id: 1,
    username: "john_doe",
    settings: {
        notifications: true
    }
};
let user2: UserProfile = {
    id: 2,
    username: "jane_doe"
};
let user3: UserProfile = {
    id: 3,
    username: "alice_smith",
    settings: {
        
    }
};

function isNotified(user: UserProfile): boolean {
    return user.settings?.notifications ?? false;
}
console.log(user1.username + " is notified: " + isNotified(user1)); // true
console.log(user2.username + " is notified: " + isNotified(user2)); // false
console.log(user3.username + " is notified: " + isNotified(user3)); // false