
export class Item{

    public item :string;
    public salesOffice :string;
    public description :string;
    public itemGroup:string;
    public material :string;
    public size :string;
    public  standard  :string;
    public productLine :string;
    public selectionCode :string;
    public commodityCode :string;
    public status :string;
    public baseUnit :string;
    public envirmentalCompilanceCode :string;
    public dimensionUnit:string;
    public weightUnit :string;
    public productDescription :string;
    public picture : string;

    public width:number;
    public length:number;
    public height:number;
    public netWeight:number;
    public grosWeight:number;

    public publish:boolean;
    public manuelCreated:boolean;
    public hazerdousMaterialIndicator:boolean;

   
    constructor(){

        this.item='';
        this.salesOffice ='';
        this.description ='';
        this.itemGroup='';
        this.material ='';
        this.size ='';
        this. standard  ='';
        this.productLine ='';
        this.selectionCode ='';
        this.commodityCode ='';
        this.status ='';
        this.baseUnit ='';
        this.envirmentalCompilanceCode ='';
        this.dimensionUnit='';
        this.weightUnit ='';
        this.productDescription ='';
        this.picture='';

       this.width=0;
       this.length=0;
       this.height=0;
       this.netWeight=0;
       this.grosWeight=0;
    
       this.publish=false;
       this.manuelCreated=false;
       this.hazerdousMaterialIndicator=false;
    
    }
    
}