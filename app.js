let keys=document.querySelectorAll(".box");
let str="";
keys.forEach((key)=>{
    key.addEventListener("click",()=>{
        if(key.innerText=="="){
            str=eval(str);
            document.querySelector(".cal").innerHTML=str;
            document.querySelector(".ans").innerHTML="";
        }
        else if(key.innerText=="AC"){
            str="";
            document.querySelector(".ans").innerHTML=str;
            document.querySelector(".cal").innerHTML=str;
        }
        else if(key.innerText=="C"){
            str=str.slice(0,-1);
            document.querySelector(".cal").innerHTML=str;
            ans=eval(str);
            document.querySelector(".ans").innerHTML=ans;
        }
        else{
            if(str==""){
                str=str+key.innerText;
                document.querySelector(".cal").innerHTML=str;
            }
            else{
                str=str+key.innerText;
                document.querySelector(".cal").innerHTML=str;
                ans=eval(str);
                document.querySelector(".ans").innerHTML=ans;
            }    
        }
        
    })  
})