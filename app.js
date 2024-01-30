//  5tai tentsuu
// var a=5, b=4, c=5;
// var count=0;
// if(a==5) {
//     count++;
// } else{}
// if(b==5) {
//     count++;
// } else{}
// if(c==5) {
//     count++;
// } else{}
// console.log(count);

// // switch statement - nuhtsul shalgah
// var word = "hello";
// switch(word){
//     case "hello":
//         console.log("Saina uu?");
//         break;
//         default :
//         console.log("Iim vh bhgui bna") ;
//         break;
// }
// 1-monday
var word="tuesday";
switch(word) {
    case "monday" :
        console.log("davaa garig");
        break;
        case "tuesday" :
            console.log("mygmar gairg");
            break;
            case "wednesday" :
                console.log("lhavga garig");
                break;
                case "thursday" :
                    console.log("purev garig");
                    break;
                    case "friday" :
                        console.log("baasan garig") ;
                        break;
                        default :
                        console.log("iim udur bhgui");
                        break;

}
 
// jims oruulaar ungu garah
var jims="banana";
switch(jims){
    case "banana" :
    case "mango" :
    case "lemon" :
        console.log("shar");
        break;
        case "apple" :
        case "watermelon" :
            console.log("ulaan");
        default:
            console.log("Ene jims shar bish baina");
}
//9052-9057
// 9052
// var dun= "3" ;
// switch(dun) {

//     case "2" :
//     case "3" :
//     case "4" :
//     case "5" :
//         console.log("tentsen") ;
//         break;
//         default:
//             console.log("tentseegui");
// }

// 9053
// var  dun=4;
// switch(dun) {
//     case 5 :
//         console.log("onts");
//         break;
//     case 4 :
//         console.log("sain");
//         break;
//     case 3 :
//         console.log("dund");
//         break;
//     case 2 :
//         console.log("muu");
//         break;
//      default :
//         console.log("hohichino");
//         break;
// }
// 9057
var sar = 3;
switch(sar) {
    case 12 :
    case 1 :
    case 2 :
        console.log("uvul");
        break;
    case 3 :
    case 4 : 
    case 5 :
        console.log("havar");
        break;
    case 6 :
    case 7 :
    case 8 :
        console.log("zun");
        break;
    case 9 :
    case 10 :
    case 11 :
        console.log("namar");
        break;
    default :
    console.log("iim uliral baihgui");
    break;
}
// daalgavar togloom
alert("Ta yg odoo sagsan bumbugiin yrtuntsid sersen bn ") ;
alert("togloomd yalval hojin ugui bol shuud uhne") ; 
var choice = prompt("Bagaa songonuu lebron james or stephen curry") ;
if(choice=="lebron james"){
    alert("lebron technic avan huugdluuu"); 
    var choice2 = prompt("urgeljluuleh togloh or uheh");
    if(choice2=="urgeljluuleh") { 
        alert("bayar hurgey  ta nemelt 10 onoo avch  tsag duusch ta yalla");
    } 
    else if(choice2=="uheh") {
        alert("ta uhlee ahahahahah");
    }
}else if(choice=="stephen curry"){
        alert("stephen curry technic avan huugdluu");
        var choice3 = prompt("urgeljluuleh togloh or uheh");
        if(choice3=="urgeljluuleh") { 
            alert("bayar hurgey  ta nemelt 10 onoo avch  tsag duusch ta yalla");
        } 
        else if(choice3=="uheh") {
            alert("ta uhlee ahahahahah");
        }
}else{
    console.log("wrong")
}
    

