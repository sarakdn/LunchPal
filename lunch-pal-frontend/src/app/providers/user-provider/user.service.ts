import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // TODO: workaround for not storing a user session

  public user = null;
  public loginStatus = false
  public token: string;

  private username = new BehaviorSubject('');
  currentUsername = this.username.asObservable();

  constructor(private http: HttpClient) {
    let loggedSession = localStorage.getItem("loggedIn")
    if (loggedSession != null) {
      this.loginStatus = true
      this.token = localStorage.getItem("token")
      this.user = JSON.parse(localStorage.getItem("user"))
    }
  }

  public async registerUser(user) {
    let userPost = this.http.post("http://localhost:3000/users/new", user)
    return userPost
  }

  public async login(email, password): Promise<boolean> {



    const login = { email: email, password: password };

    let loginSuccess: Promise<boolean> = new Promise((resolve, reject) => {

      let userPost = this.http.post("http://localhost:3000/users/login", login)

      userPost.subscribe((info) => {
        this.user = info["user"]
        this.token = info["token"]
        this.loginStatus = true
        localStorage.setItem("loggedIn", "logged")
        localStorage.setItem("user", JSON.stringify(this.user))
        localStorage.setItem("token", this.token)
        resolve(true)
      },
        (error) => {
          reject("We have an error when you logged in")
        })
    })

    return loginSuccess
  }

  public async resetPassword(email) {
    let userPost = this.http.post("http://localhost:3000/users/reset", email)
    return userPost
  }

  public logout() {
    console.log("logging out")
    this.loginStatus = false
    this.user = null;
    localStorage.clear()
  }


  public isLogIn() {
    localStorage.getItem("user")
    return this.loginStatus
  }

  public getUserLogged() {
    console.log(this.user)
    return this.user;
  }

}
