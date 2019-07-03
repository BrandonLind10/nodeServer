function Database(){
    //private Id generator
    let ID = {
            id: 0,
            generate: function(){
                this.id++;
                return this.id;
            }
        }
        
    //private collection class
    function Collection(){
        this.list=function(){
            for(let i =0; i< this.length; i++){
                console.log(this[i]);
            }
        }
        this.add= function(item){
            if(typeof item === "object"){
                if(item.id === undefined || null){
                    item.id = ID.generate();
                }
                this.push(item);
            }
        }
        //can only get items by id
        this.get= function(itemID){
            for(let i = 0; i < this.length; i++){
                let item= this[i];
                for(prop in item){
                    if(prop === "id"){
                        if(item[prop]===itemID){
                            return item;
                        }
                    }
                }
            }
        }
        //can only remove items by id
        this.remove= function(itemID){
                        for(let i = 0; i < this.length; i++){
                let item= this[i];
                for(prop in item){
                    if(prop === "id"){
                        if(item[prop]===itemID){
                            this.splice(i,1);
                        }
                    }
                }
            }
        }
        
        this.findID= function (prop,value){
            for(let i =0; i<this.length; i++){
                for(key in this[i]){
                    if(key === prop && this[i][key] === value){
                        return this[i];
                    }
                }
            }
        }
    }
    Collection.prototype= Object.create(Array.prototype);
    Collection.prototype.constructor="Collection";


    //public addCollection method
    this.addCollection=function(name){
        this[name]= new Collection();
    }
    
    this.drop=function(name){
       if(typeof name === "object"){
            delete this[name];
       }
    }
}

exports.Database= Database;
