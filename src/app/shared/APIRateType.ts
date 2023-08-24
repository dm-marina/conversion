
export class APIRateType{
    constructor(
        public r030: string,
        public txt: string, 
        public rate :string,
        public cc:string,  
        public exchangedate:string) {
            this.r030 = r030;
            this.txt = txt;
            this.rate = rate;
            this.cc = cc;
            this.exchangedate = exchangedate
         }
}