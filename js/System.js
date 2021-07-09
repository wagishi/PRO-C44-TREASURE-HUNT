class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
     
    authenticate(actualCode,enterCode){
      textSize(50);
      fill("black");
      text(code,300,300)
      if(actualCode === enterCode.toUpperCase()) 
          return true
      else
          return false
  }

    

}