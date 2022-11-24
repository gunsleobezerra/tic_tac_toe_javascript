function drawForm(type,placeid)
{
    let place = document.getElementById(placeid);
    let ctx = place.getContext("2d");

    let x = place.width / 2;
    let y = place.height / 2;

    ctx.beginPath();
    switch (type) {
        case "circle":
        
            
            ctx.arc(x, y, 50, 0, 2 * Math.PI);
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#FF0000';
            ctx.stroke();


        break;

        case "square":

            ctx.rect(x - 50, y - 50, 100, 100);
            ctx.lineWidth = 20;
            ctx.strokeStyle = '#5818';
            ctx.stroke();
            

            
        break;
    
        default:
        break;
    }
    //console.log(type);
}