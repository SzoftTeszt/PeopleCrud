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

    add(){
        const ember ={
            name:"Dezső",
            age:50,
            gender:"férfi"
        }
        
        this.http.post(this.url,ember).subscribe(
            ()=>this.read()
        )


    }


}
