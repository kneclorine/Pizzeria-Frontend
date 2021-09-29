import { Injectable } from "@angular/core";
import { LoadingService } from "../services/loading.service";

@Injectable({providedIn:'root'})
export class InjectorDecorator {
    private static loadingService: LoadingService;
    constructor(loadingService: LoadingService) {
        InjectorDecorator.loadingService=loadingService;

    }
    static getLoadingService() {
        return InjectorDecorator.loadingService;
    }
}