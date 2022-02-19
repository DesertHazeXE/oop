
 //Button1
if(confirm()){
    var color=document.getElementById("color")
color.style.backgroundColor="black"
}


//   Button2
 let age=prompt("Enter your age")
  if(age<18)
 {
     alert("You are baby,you cant open this site.")
  }
  else{
     alert("You can come i let you")
  }
 

// Button3
class Information { }
var person = {
    firstName: "David",
    lastName: "Namazov",
    password: "aTani3588",
   get fullName() {
        return this.firstName + " " + this.lastName;
    },
    showInfo(){
        document.write(this.fullName.toUpperCase())
    
      }
}

person.showInfo();
