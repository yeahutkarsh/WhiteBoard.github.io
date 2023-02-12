let pencil = document.querySelector("#pencil");
    let eraser = document.querySelector("#eraser");
    let rect = document.querySelector("#rect");
    let line = document.querySelector("#line");
    let options = document.querySelectorAll(".sizeboxes");
    // identify -> ki click hua hai ki nhi hua hai, agar click hua hai tho kuch action lenge agar double click hua hai tho kuch aur action lenge -> double click

    pencil.addEventListener("click", function(e) {
        if(cTool == "pencil")
        {
            //second click
            //options show hojayenge
            options[0].style.display = "flex";
        }else{
            for(let i = 0; i < options.length; i++)
            {
                options[i].style.display = "none";
            }
            //pencil.style.border = 1px solid red;
            cTool = "pencil";
            drawcolor = "black";
            tool.lineWidth = pencilSize;
        }
    })
    eraser.addEventListener("click", function(e) {
        if(cTool == "eraser")
        {
            //second click
            //options show hojayenge
            options[1].style.display = "flex";
            // drawcolor = "white"
        }else{
            //first click
            //
            cTool = "eraser";
            drawcolor = "white";
            for(let i = 0; i < options.length; i++)
            {
                options[i].style.display = "none";
            }
            // eraser.style.border = "1px solid rgb(59, 59, 59)";
            tool.lineWidth = eraserSize;
        }
    })
    rect.addEventListener("click", function(e) {
        if(cTool == "rect")
        {
            //second click
            //options show hojayenge
            options[2].style.display = "flex";
        }else{
            for(let i = 0; i < options.length; i++)
            {
                options[i].style.display = "none";
            }
            //pencil.style.border = 1px solid red;
            cTool = "rect";
             drawcolor = "black";
            tool.lineWidth = rectSize;
        }
    })
    line.addEventListener("click", function(e) {
        if(cTool == "line")
        {
            //second click
            //options show hojayenge
            options[3].style.display = "flex";
        }else{
            for(let i = 0; i < options.length; i++)
            {
                options[i].style.display = "none";
            }
            //pencil.style.border = 1px solid red;
            cTool = "line";
            drawcolor = "black";
            tool.lineWidth = lineSize;
        }
    })

// <!-- Color change -->

    let Red = document.querySelector(".red");
    let Green = document.querySelector(".green");
    let Blue = document.querySelector(".blue");
    let Yellow = document.querySelector(".yellow");

        Red.addEventListener("click", function(){
            tool.strokeStyle = "red";
        })
        Blue.addEventListener("click", function(){
            tool.strokeStyle = "blue";
        })
        Green.addEventListener("click", function(){
            tool.strokeStyle = "green";
        })
        Yellow.addEventListener("click", function(){
            tool.strokeStyle = "yellow";
        })

// Size change logic

// <!-- size change logic -->
let pencilSize = 1;
let eraserSize = 3;
let rectSize = 3;
let lineSize = 3;
let sizeBoxArr = document.querySelectorAll(".sizeboxes");

sizeBoxArr[0].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    //actual event occur -> target
    // console.log(e.target)

    //event listener
    //console.log(e.currentTarget)
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if(firstClass == "size1")
        {
            pencilSize = 1;
        }else if(firstClass == "size2")
        {
            pencilSize = 3;
        }else if(firstClass == "size3")
        {
            pencilSize = 7;
        }else if(firstClass == "size4")
        {
            pencilSize = 11;
        }
    }
    tool.lineWidth = pencilSize;
})
sizeBoxArr[1].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    //actual event occur -> target
    // console.log(e.target)

    //event listener
    //console.log(e.currentTarget)
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if(firstClass == "size1")
        {
            eraserSize = 3;
        }else if(firstClass == "size2")
        {
            eraserSize = 7;
        }else if(firstClass == "size3")
        {
            eraserSize = 11;
        }else if(firstClass == "size4")
        {
           eraserSize = 15;
        }
    }
    tool.lineWidth = eraserSize;
})
sizeBoxArr[2].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    //actual event occur -> target
    // console.log(e.target)

    //event listener
    //console.log(e.currentTarget)
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if(firstClass == "size1")
        {
            rectSize = 3; 
        }else if(firstClass == "size2")
        {
            rectSize = 7;
        }else if(firstClass == "size3")
        { 
            rectSize = 11;
        }else if(firstClass == "size4")
        {
            rectSize = 15;
        }
    }
    tool.lineWidth = rectSize;
})
sizeBoxArr[3].addEventListener("click", function (e) {
    let elems = ["size1", "size2", "size3", "size4"];
    //actual event occur -> target
    // console.log(e.target)

    //event listener
    //console.log(e.currentTarget)
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if(test){
        if(firstClass == "size1")
        {
           lineSize = 3;
        }else if(firstClass == "size2")
        { 
           lineSize = 7;
        }else if(firstClass == "size3")
        {
           lineSize = 11; 
        }else if(firstClass == "size4")
        {
           lineSize = 15;
        }
    }
    tool.lineWidth = lineSize;
})