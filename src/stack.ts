class Stack{
    private items:String[];
    constructor(in_items?:Array<String>){
        this.items = in_items || [];
    }
    length():Number{
        return this.items.length;
    }
    stack(el:String){
        this.items.push(el);
    }
    unstack():String|undefined{
        return this.length()>0 ? this.items.pop():undefined;
    }
    getElements():String[]{
        return this.items;
    }
}