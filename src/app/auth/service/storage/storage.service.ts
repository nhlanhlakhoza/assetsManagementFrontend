import { Injectable } from '@angular/core';
const TOKEN = "token";
const USER = "user";
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  

  static isLocalStorageAvailable(): boolean {
    try {
      const test = '_localStorageTest_';
      window.localStorage.setItem(test, test);
      window.localStorage.removeItem(test);
      return true;
    } 
    catch (e) {
      return false;
      console.log(e)
    }
  }

  static saveToken(token: string): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
    }
  }

  static saveUser(user: any): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(USER);
      window.localStorage.setItem(USER, JSON.stringify(user));
    }
  }

  static getToken(): string | null {
    if (this.isLocalStorageAvailable()) {

      return localStorage.getItem(TOKEN);

    }
    return null;
  }

  static getUser(): any {
    if (this.isLocalStorageAvailable()) {
      const user = window.localStorage.getItem(USER);
      if (user) {
        return JSON.parse(user);
      }
    }
    return null;
  }

  static getUserRole(): string {
    const user = this.getUser();
    return user?.role || '';
  }

  static isAdminLoggedIn(): boolean {
    return this.getToken() !== null && this.getUserRole() === 'ADMIN';
  }

  static isEmployeeLoggedIn(): boolean {
    return this.getToken() !== null && this.getUserRole() === 'EMPLOYEE';
  }

  static getUserId(): string {
    const user = this.getUser();
    return user?.id || '';
  }

  static logout(): void {
    if (this.isLocalStorageAvailable()) {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.removeItem(USER);
    }
  }
  
}