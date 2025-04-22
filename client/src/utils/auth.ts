import { jwtDecode, JwtPayload } from 'jwt-decode';
import type { UserData } from '../interfaces/UserData';


class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    if (!token) {
      return jwtDecode<UserData>(this.getToken());
    } else {
      return null;
    }
  }
  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }

  isTokenExpired(token: string) { 
    // TODO: return a value that indicates if the token is expired
    const tokenExpired = jwtDecode<JwtPayload>(token)
    const currentTime = Math.floor(Date.now() / 1000)

    if (!tokenExpired) {
      return true 
    } 

    if (!tokenExpired.exp) {
      return true 
    }

    return tokenExpired.exp < currentTime
  }

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }


  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }


  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}


export default new AuthService();