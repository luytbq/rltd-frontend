import {randomString} from './utils.js'

export class AuthManager {
  #accounts;
  #sessions;

  constructor() {
    this.#accounts = [
      {
        username: 'luytbq',
        password: '123456',
        partners: ['company-1'],
        roles: ['admin']
      },
      {
        username: 'trungtt',
        password: '123456',
        partners: ['company-2'],
        roles: ['admin']
      },
    ];

    this.#sessions = {};

  }

  login({username, password}) {
    const account = this.#accounts.find(a => a.username == username && a.password == password);
    if (!account) throw new Error('invalid username or password');
    console.log('found account', account);

    return this.createSession(account);
  }

  createSession(account) {
    const newSessionId = randomString(64);
    this.#sessions[newSessionId] = account;
    return newSessionId;
  }

  getSession(sessionId) {
    return this.#sessions[sessionId];
  }
}
