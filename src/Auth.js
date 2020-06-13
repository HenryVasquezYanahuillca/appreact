class Auth {
  n_k="";
  p_u="";
  users=Array('a','b');
  passwords=Array('aa','bb');
  dataU={"a":"1","b":"2"};
  constructor(n,p) {
    this.is_auth=false;
    this.n_k=n;
    this.p_u=p;
  }
  login(){
    if (this.dataU[this.n_k]==this.p_u) {
      this.is_auth=true;
      alert(this.n_k+" "+this.p_u)    
    }
  }
  logout(){
    this.is_auth=false;
  }
  get_is_auth(){
    return this.is_auth;
  }
}

export default new Auth();
