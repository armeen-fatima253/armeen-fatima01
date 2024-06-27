import inquirer from "inquirer";
let mybal=50000
let mypin=12134

let pinans=await inquirer.prompt(
    [
        {
            name:"armeen",
            message:"enter your pin",
            type:"number",
        }
    ]
)

if(pinans.armeen===mypin){
    console.log("correct pincode!!")
  let operationans=await inquirer.prompt(
        [
            {
                name:"ali",
                message:"please select options!!",
                type:"list",
                choices:["withdraw","check balance",],
            }
        ]
    )
    if(operationans.ali==="withdraw"){
        let amountans=await inquirer.prompt(
            [
                {
                    name:"amount",
                    message:"enter your amount",
                    type:"number",
                }
            ]
        )
        mybal-=amountans.amount
        console.log("your current balance is:" + mybal)
        console.log("correct operation!!")
    }
    else if(operationans.ali==="check balance"){
        console.log("your balance is:" + mybal)
    }
    else{
        console.log("your operation is incorrect!!")
    }
}
else{
    console.log("incorrect pincode!!")
}

