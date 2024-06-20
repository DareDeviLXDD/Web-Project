let Back = document.getElementById('back');
let header = document.getElementById('Title');
var messageCont = document.getElementById('msgBox');
let footer = document.getElementById('utils');
let container = document.getElementById('container');
let Send = document.getElementById('send');
let nav = document.getElementById('nav');
let grabber = document.getElementById('grabber');
let history = document.getElementById('historyContainer');
const indentaion =100;
nav.style.top=header.offsetHeight+'px' ;
nav.style.height=(window.innerHeight-(header.offsetHeight+footer.offsetHeight))+'px';
grabber.style.height=(window.innerHeight-(header.offsetHeight+footer.offsetHeight))+'px';
history.style.top=document.getElementById('navHead').offsetHeight+'px';
history.style.height=(nav.offsetHeight-document.getElementById('navHead').offsetHeight)+'px';
function SendMsg()
{
    let message = document.createElement("div");
    message.className="userMsg";
    let content ='';
    content=messageCont.value;
    if(content!="")
    {
    messageCont.value="";
    let msgContent =document.createElement("label");
    //fix new line becomes space
    msgContent.innerHTML=content;
    message.appendChild(msgContent);
    container.appendChild(message);
    }

    //fix need to stack from downwards

    /*if(header.offsetHeight <= container.offsetTop-message.offsetHeight-40)
    {
        container.style.top=container.offsetTop-(message.offsetHeight-40);
    }
    else
    {
        container.style.top=header.offsetHeight+'px';    
    }*/
}
container.style.top=header.offsetHeight+'px';
//container.style.top=footer.style.top;
container.style.height=window.innerHeight-(header.offsetHeight+footer.offsetHeight);
messageCont.style.width=(window.innerWidth-indentaion)+'px';
Back.style.height = window.getComputedStyle(header).height;
window.addEventListener('resize',()=>
{
Back.style.height = window.getComputedStyle(header).height;
messageCont.style.width=(window.innerWidth-indentaion)+'px';
container.style.height=window.innerHeight-(header.offsetHeight+footer.offsetHeight);
nav.style.height=(window.innerHeight-(header.offsetHeight+footer.offsetHeight))+'px';
history.style.height=(nav.offsetHeight-document.getElementById('navHead').offsetHeight)+'px';
});
Send.addEventListener('click',()=>{
    SendMsg();
});
function insertNewLine() {
    let cursorPosition = messageCont.selectionStart;


    let textBeforeCursor = messageCont.value.substring(0, cursorPosition);
    let textAfterCursor = messageCont.value.substring(cursorPosition);


    messageCont.value = textBeforeCursor + "\n" + textAfterCursor;


    messageCont.selectionStart = messageCont.selectionEnd = cursorPosition + 1;
  }
messageCont.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && event.shiftKey) {
        
        event.preventDefault();
        insertNewLine();
        
      } else if (event.key === "Enter") {
        
        SendMsg();
      }
  });
  nav.addEventListener('mouseenter',()=>{
    container.style.paddingLeft='190';
  });
  nav.addEventListener('mouseleave',()=>{
    container.style.paddingLeft='0';
  });