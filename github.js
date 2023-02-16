class GitHub {
    constructor() {
        this.client_id = '3c021d352d37b31614b4';
        this.client_secret = '3ed9b29b0ecf509280eda0a8a1026a86c0d3b24e';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}












