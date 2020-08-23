export class User {
    constructor(private _token: string,
                public email: string,
                private _ExpirationDate: Date,
                public localId: string){};

    get Token() {
        if (!this._ExpirationDate || new Date() > this._ExpirationDate) {
            return null;
        } 
        return this._token;
    }            
}