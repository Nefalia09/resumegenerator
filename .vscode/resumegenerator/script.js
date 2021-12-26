function addnewWEfield() 
{
    // console.log("adding new filed ");
  let newNode = document.createElement('textarea');   
  newNode.classList.add('form-control');
  newNode.classList.add('wefield');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder','Enterhere');

  
  let weOb = document.getElementById("we");
  let weaddbuttonOb = document.getElementById("weaddbutton");
       weOb.insertBefore(newNode, weaddbuttonOb);


}

function addnewaqfield(){
        // console.log("adding new filed ");
  let newNode = document.createElement('textarea');   
  newNode.classList.add('form-control');
  newNode.classList.add('eqfield');
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder','Enterhere');

  
  let aqOb = document.getElementById("aq");
  let aqaddbuttonOb = document.getElementById("aqaddbutton");
       aqOb.insertBefore(newNode, aqaddbuttonOb);



}


