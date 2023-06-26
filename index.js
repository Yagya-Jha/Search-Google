let f= false
let search = document.querySelector("#search");
search.addEventListener("focus",(e)=>{
    f = true;
});
search.addEventListener("focusout",(e)=>{
    f=false;
});
search.addEventListener("keypress",(e)=>{
    if(e.key=="Enter" && f){
        _search_()
    }
});
let srch = document.querySelector("#srch");
srch.addEventListener("click",(e)=>{
    _search_();
});

function _search_(){
    if(search.value.trim()!==""){
        let link = "https://www.google.com/search?q="
        let query = search.value;
        query = query.replaceAll(" ", "+")
        link +=query;
        document.location = link;
    }
}

async function apod(){
    let stuff = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    let stuf_json = await stuff.json()
    console.log(stuf_json);
    document.querySelector('#test_i').src = stuf_json.hdurl?stuf_json.hdurl:stuf_json.url;
    document.querySelector("#test").innerHTML = stuf_json.explanation;
    document.querySelector("#heading").innerHTML = stuf_json.title;
}
if(screen.width<700){
    apod();
}