/* The hash table
    This data structure allows us to store data with a key so its like objects 
    key value pairs creating our own implementation should allow us to dodge any 
    conflicts with regular objects key values. It is still  recommended to use the 
    map function on an object to  store key value pairs but being able to create 
    your own hash table is good.
    
    This will include the following methods
    -set(key, value)
    -get(key)
    -remove(key)
    -hashing function to convert string key to numeric index
    -display(key) - logs the key value pairs

   This code was created by following the video lessons on youtube the address is below
https://www.youtube.com/watch?v=poGEVboh9Rw&list=PLC3y8-rFHvwg6nsAOfC5Is18KB2DrVOJy  
-This link takes you to the data structure video list by Codevolution.*/

export class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }
        return total % this.size;
    }

    set(key, value){
        const index = this.hash(key);
        //this.table[index] = value; 
        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }
    }

    get(key){
        const index = this.hash(key);
        //return this.table[index];
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        //this.table[index] = undefined;
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new HashTable(50);

table.set('Name', 'Mason');
table.set('Age','30');
table.set('Sex', 'Male');
table.display();