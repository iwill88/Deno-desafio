import * as mod from "https://deno.land/std@0.182.0/fmt/colors.ts";



const text = Deno.args[0]

switch(Deno.args[1]) {

    case "red":
        console.log(mod.red(text));
        break;
    case "blue":
        console.log(mod.blue(text));
        break;
    case "white":
        console.log(mod.white(text));
        break;
    case "green":
        console.log(mod.green(text));
        break;
    case "gray":
        console.log(mod.gray(text));
        break;
    case "yellow":
        console.log(mod.yellow(text));
        break;
    case "black":
        console.log(mod.black(text));
        break;

}