const _:any = require('lodash');
import { retry } from 'rxjs/operators/retry';
import { Routes } from '@angular/router';
import { WebAdminConsoleComponent } from '../components/index';
let instance:ComponentRegistry = undefined;
export class ComponentRegistry {
    private pluginMap: { [key:string]:any; } = {};
    static getInstance():ComponentRegistry{
        if(instance == null){
            instance = new ComponentRegistry();
        }
        return instance;
    }
    private constructor(){
        console.log("Create component registry");
    }

    registryPluginComponent(name:string,value:any){
        console.log("registryPluginComponent",value);
        this.pluginMap[name] = value;
    }

    getRouteConfig():Routes{
        let info:Array<any> = new Array();
        _.forEach(this.pluginMap,(element:any,key:string) => {
            info.push({
                path:key,
                component:element
            });
        });
        Object.keys(this.pluginMap).forEach(key => console.log(key));        
        return info;
    }
}

export function PluginView(name:string){
    console.log("pluginview decorator called",name);
    return (target:any) => {
        ComponentRegistry.getInstance().registryPluginComponent(name,target);
    }
}
