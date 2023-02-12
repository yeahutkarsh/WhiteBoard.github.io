let boardTop = canvasBoard.getBoundingClientRect().top;
       let boardLeft = canvasBoard.getBoundingClientRect().left;
       let iX, iY, fX, fY;
       let drawingMode = false;

       function changecolor(element)
       {
        drawcolor = element.style.background;   
       }

    body.addEventListener("mousedown", function(e){

        iX = e.clientX - boardLeft;
        iY = e.clientY - boardTop;
        if(cTool == "pencil" || cTool == "eraser")
        {
            drawingMode = true;
            tool.beginPath();
            tool.moveTo(iX, iY);
            tool.strokeStyle = drawcolor;
        }
        
    })
    body.addEventListener("mouseup", function(e){
        if(cTool == "pencil" || cTool == "eraser")
        {
            drawingMode = false; 
        }else if(cTool == "rect" || cTool == "line"){
            // rect, line
            fX = e.clientX - boardLeft;
            fY = e.clientY - boardTop;
            tool.strokeStyle = drawcolor;
        let width = fX - iX;
        let height = fY - iY;
        if(cTool == "rect"){
            tool.strokeRect(iX, iY, width, height);
        } else if(cTool == "line") {
            tool.beginPath();
            tool.moveTo(iX, iY);
            tool.lineTo(fX, fY);
            tool.stroke();
            console.log("Pencil tool is pending")
        }
        }
    })    
    body.addEventListener("mousemove", function(e){
        if(drawingMode == false)
        return;
        fX = e.clientX - boardLeft;
        fY = e.clientY - boardTop;
        // tool.beginPath();
        // tool.moveTo(iX, iY);
        tool.strokeStyle = drawcolor;
        tool.lineTo(fX, fY);
        tool.stroke();
        iX = fX;
        iY = fY;
    })  