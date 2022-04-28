// Using this class to access our GitHub API
// Need authorisation to be able to search for more than 100 users in an hour so we are getting permission from GitHub through client ids/secrets.
// Remember classes are used to create objects.
class GitHub {
    // *** Constructors create/initialise an instance of an object in a class
    constructor() {
        this.client_id = 'be2e48b8c4d4238aab04';
        this.client_secret = '7ac3823c0f201118b9c7a8e289b568a38c74a5fe';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        return {
            profile: profile
        }
    }
}





// *** E.g if you want to create a car object in your class within your constructor you would include 'make', 'colour', 'engine size' etc.
// *** You could then use a class like so:
// *** let car = ('BMW', 'Blue', '2.0')