module.exports = class User {
    constructor(gender, name, picture) {
        this.gender = gender;
        this.name = name;
        this.picture = picture;
    }

    getFullName() {
        return capitalize(this.name.first) + ' ' + capitalize(this.name.last);
    }
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
