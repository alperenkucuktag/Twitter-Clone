// console.log("çalişti")
// console.log(buttonActive);

const editable = document.querySelector(".editable")
//console.log(editable);
const placeholder = document.querySelector(".placeholder")
// console.log(placeholder);
const counter=document.querySelector(".counter")
// console.log(counter);
const button=document.querySelector(".button")
const readonly=document.querySelector(".readonly")
// console.log(button)

editable.onfocus=()=>{
    placeholder.style.color="#c5ccd3"
}
//odaklanılan elemnadan çıkıldığında tetiklenir
editable.onblur=()=>{
    placeholder.style.color="#98a5b1"

}
editable.onkeypress=(e)=>{
    placeholder.style.display="none"
    validateTweet(e.target)
}
editable.onkeyup=(e)=>{
    placeholder.style.display="flex"
    validateTweet(e.target)
}
const validateTweet=(element)=>{
    let text;
    let tweetLimit=100;
    let tweetlength= element.innerText.length
    
    // console.log(tweetlength)
    if (tweetlength<=0) {
        placeholder.style.display="block"
        counter.style.display="none"
        button.classList.remove("active")
        
        
       
        
       

        
    }else{
        
        button.classList.add("active")
        counter.style.display="block"
       placeholder.style.display="none" 
       counter.innerText=tweetLimit-tweetlength
       
       
    
       

       
    }

    if (tweetlength>tweetLimit) {
         
        let overText=element.innerText.substr(tweetLimit,tweetlength)
        console.log(overText);
        overText=`<span class="overspan">${overText}</span>`
        text=element.innerText.substr(0,tweetLimit) + overText
        readonly.style.zIndex="1"
        button.classList.remove("active")

      


        counter.style.color="#e0245e"
      
    

        
        
        
    }else{
        counter.style.color="#333"
        
        
    }
    readonly.innerHTML=text






}











