function CalcCurrency() {
    var type1 = document.getElementById("src").value;
    var input = document.getElementById("cur_data").value;
    var type2 = document.getElementById("dest").value;
    var output=0,op=1;

    switch (type1) {
        case "dollar":
            switch (type2) {
                case "dollar":
                    output=input;op=1;break;
                case "rupee":
                    output=input*71.52;op=2;break;
                case "yen":
                    output=input*109.82;op=3;break;
                default:
                    output=123;
            }
            break;
        case "rupee":
            switch (type2) {
                case "rupee":
                    output=input;op=2;break;
                case "dollar":
                    output=input/71.52;op=1;break;
                case "yen":
                    output=input*1.54;op=3;break;
                default:
                    output=123;
            }
            break;
        case "yen":
            switch (type2) {
                case "yen":
                    output=input;op=3;break;
                case "rupee":
                    output=input/1.54;op=2;break;
                case "dollar":
                    output=input/109.82;op=1;break;
                default:
                    output=123;
            }
            break;
        default:
            output=123;

    }

    var cur="$";
    if(op===2)
        cur="Rs";
    else if(op===3)
        cur="Y";
    //output.toExponential(2);
    alert("The converted currency value is: "+output+cur);
}


