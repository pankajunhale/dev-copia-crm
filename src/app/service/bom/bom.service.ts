import { BaseService } from "../base.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class BomService{
    constructor(private http:HttpClient){


    }

    public Find(){
        return this.http.get("");
    }
}