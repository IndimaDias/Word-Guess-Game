function createButtons(){
    var str = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    var grid = document.createElement('div');
    grid.className ="grid";

    for(var i=0; i<str.length;i++){
        var btn = document.createElement("BUTTON");
        console.log(str[i]);
        btn.setAttribute("id","btn"+str[i]);
        btn.setAttribute("value",str[i]);
        btn.setAttribute("text",str[i]);
        btn.innerHTML =str[i];
        btn.className="btnKey";
        grid.appendChild(btn);
        // document.body.appendChild(btn);
    }

    document.body.appendChild(grid);
}