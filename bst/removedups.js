//This function will take an array and remove any duplicates

export default function removeDups(arr){
    const newArray = [];

    if(Array.isArray(arr)){
        arr.forEach((element) => {
            if(!newArray.includes(element)){
                newArray.push(element);
            }
        });
        return newArray;
    }else{
        console.log('needs to pass an array');
        return null;
    }
}
