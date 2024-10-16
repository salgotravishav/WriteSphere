import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
      try {
          const userAccount = await this.account.create(ID.unique(), email, password, name);
          if (userAccount) {
              return this.login({ email, password });
          }
          return userAccount;
      } catch (error) {
          console.error(`Account creation failed: ${error.message || error}`);
          throw error;
      }
  }
  

    async login({ email, password }) {
        return await this.account.createEmailPasswordSession(email, password);
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
            return null; // Return null if there's an error
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            console.log("User logged out successfully");
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;
