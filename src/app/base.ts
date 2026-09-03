import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

@Service()
export class Base {
    private http= inject(HttpClient)
    private url="http://172.16.16.136:5169/api/People/"

    people = signal<any>([])

    constructor(){
        console.log ("futCon")
        this.read()
    }
  

    read(){
        this.http.get(this.url).subscribe(
            (data:any)=>this.people.set(data)
        )
    }

    add(ujEmber:any){
        // const ember ={
        //     name:"Dezső",
        //     age:50,
        //     gender:"férfi"
        // }
        
        this.http.post(this.url,ujEmber).subscribe(
            ()=>this.read()
        )


    }
   ment(ember:any){              
        this.http.put(this.url+ember.id,ember).subscribe(
            ()=>this.read()
        )
     }
   
     torol(ember:any){              
        this.http.delete(this.url+ember.id).subscribe(
            ()=>this.read()
        )
     }


}
