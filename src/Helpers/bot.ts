export function populateArray(value:string){
    let resArray = [];
    value.split(",").forEach(element=>{
        resArray.push(element);
    });
    return resArray;
}

