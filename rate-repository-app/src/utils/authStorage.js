import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    async getAccessTokens() {
        const token = await AsyncStorage.getItem(
            `${this.namespace}:tokens`
        )
        return token ? JSON.parse(token) : [];
    }

    async setAccessToken(accessToken) {
        await AsyncStorage.setItem(
            `${this.namespace}:tokens`,
            JSON.stringify(accessToken)
        );
    }

    async removeAccessToken() {
        await AsyncStorage.removeItem(`${this.namespace}:tokens`)
    }
}

export default AuthStorage;