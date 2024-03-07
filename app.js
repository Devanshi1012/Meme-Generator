const btn = document.querySelector("#btn");
const memeImg = document.querySelector(".meme");
const URL = "https://meme-api.com/gimme";

const getMemes = async()=>{
    const response =  await fetch(URL);
    console.log(response);
    const data = await response.json();
    const results = data.url;
    const img = document.createElement("img");
    img.src = results;
    memeImg.innerHTML="";
    memeImg.append(img);

}
btn.addEventListener("click",getMemes);