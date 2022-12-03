
// =====DOM HTML ====
const img=document.querySelector("#slide");
const slide1_container=document.querySelector(".slide1_container");
const slide2_container = document.querySelectorAll(".slide2_container");
const product_detail=document.querySelector(".detail");
const banner=document.querySelector(".banner");
const mode=document.querySelector("#light");


// ===== Variable====
let images=["img1.jpg", "img-1.jpg"];
let count_img=0;
let slide1_product=
                [
                {
                    url: "img/airmax.png",
                    title: "Flannel Lined Jacket",
                    price: 40,
                    star: 5,
                    size: "XXL",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
                },
                {   url:"http://127.0.0.1:49344/img/brownJacket.png",
                    title:"Flannel Lined Jacket",
                    price:40,
                    star:5,
                    size: "XXL",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
                },
                {
                    url:"http://127.0.0.1:49344/img/colorful.png",
                    title:"Colorful Jacket",
                    price:70,
                    star: 5,
                    size: "XL",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
                },
                {
                    url:"https://m.media-amazon.com/images/I/61K4+FO8lDL._AC_UX679_.jpg",
                    title:"Colorful Jacket",
                    price:70,
                    star: 5,
                    size: "XL",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
                },
                {
                    url:"https://m.media-amazon.com/images/I/61K4+FO8lDL._AC_UX679_.jpg",
                    title:"Colorful Jacket",
                    price:70,
                    star: 5,
                    size: "XL",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
                },
                {
                    url:"https://m.media-amazon.com/images/I/61K4+FO8lDL._AC_UX679_.jpg",
                    title:"Colorful Jacket",
                    price:70,
                    star: 5,
                    size: "XL",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
                },
                {
                    url:"https://m.media-amazon.com/images/I/61K4+FO8lDL._AC_UX679_.jpg",
                    title:"Colorful Jacket",
                    price:70,
                    star: 5,
                    size: "XL",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
                }
                ]


// ====== Check if cart has no items =======
let cart=JSON.parse(localStorage.getItem("cart"));
if(cart.length== 0){
    document.querySelector(".number").style.display="none";
}
else{
    document.querySelector(".number").textContent=cart.length;
    document.querySelector(".number").style.display="";
}

// ====== Light mode =======
let darkMode=()=>{
    mode.classList.toggle("fa-toggle-on");
    document.body.classList.toggle("dark");
}

// =======Hide function=====
let hide=(element)=>{
    element.style.display="none";
}

// =======Show function=====
let show=(element)=>{
    element.style.display="";
}

// =====Show detail product_details function =======
let showDetail=(event)=>{
    let index=event.target.parentElement.parentElement.parentElement.dataset.index;
    hide(slide2_container[0]);
    hide(slide2_container[1]);
    hide(banner);

    // create div img
    let div_img=document.createElement("div");
    div_img.className="img";
    
    // create img 
    let img=document.createElement("img");
    img.src=slide1_product[index].url;
    
    // appendchild to div_img 
    div_img.appendChild(img);
    
    // create img_details
    let img_detail=document.createElement("div");
    img_detail.className="img_detail";
    
    // create h1
    let h1=document.createElement("h1");
    h1.textContent=slide1_product[index].title;
    img_detail.append(h1);
    
    // create img_rate 
    let img_rate=document.createElement("div");
    img_rate.className="img_rate";
    let star=slide1_product[index].star;
    for(i=0; i<star;i++){
        let i=document.createElement("i");
        i.className="fa fa-star";   
        // appendChild to img_rate
        img_rate.appendChild(i);
    }
    img_detail.appendChild(img_rate);
    
    // create description 
    let description=document.createElement("div");
    description.className="description";
    // create p 
    let p=document.createElement("p");
    p.textContent=slide1_product[index].description;
    // appendChild to description
    description.appendChild(p);
    img_detail.appendChild(description);

     // ====== Price ========
     let price=document.createElement("p");
     let bold1=document.createElement("b");
     bold1.textContent="Price: ";
     let span1=document.createElement("span");   
     span1.textContent="$"+slide1_product[index].price;
     price.append(bold1,span1);
     img_detail.appendChild(price);
 
     // ==== Size ======
     let size=document.createElement("p");
     let bold2=document.createElement("b");
     bold2.textContent="Size: ";
     let span2=document.createElement("span");
     span2.textContent=slide1_product[index].size;
     size.append(bold2,span2);
     img_detail.appendChild(size);
 
     // ==== button detail ======
     let btn_detail=document.createElement("div");
     btn_detail.classList.add("card_button", "btn_detail");
     // ======Btn buy =====
     let btn_back=document.createElement("button");
     btn_back.type="button";
     btn_back.textContent="Back";
     btn_back.a="index.html"
     let a = document.createElement("a");
     a.href="index.html";
     a.appendChild(btn_back)

     // ====== Btn add to cart =====
     let btn_cart=document.createElement("button");
     btn_cart.type="button";
     btn_cart.textContent="Add Cart";
     btn_detail.append(a, btn_cart);
     img_detail.appendChild(btn_detail);
 
     // append all child to product_details
     product_detail.append(div_img, img_detail);
 
     show(product_detail);
}


// ====== Call function ========
// slideShow()




