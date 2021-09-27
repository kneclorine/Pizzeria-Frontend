import { DecoratorService } from '../interceptor/decoratorservice'
function decorateClass(target: Function) {
    const methods = Object.getOwnPropertyNames(target.prototype)
        .filter(prop => prop != "constructor");
    for (let method of methods) {
        const fn = target.prototype[method];
        target.prototype[method] = function (...args: []) {
            const authozitationObserver = DecoratorService.getAuthorizationObserver();
            authozitationObserver.addToken = true;               
            const observer = fn.apply(this, args)                          
            return observer
        }
    }
}
function decorateMethod(target: Function, propertyKey: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function (...args: []) {
        const authozitationObserver = DecoratorService.getAuthorizationObserver();
        authozitationObserver.addToken = true;               
        const observer = fn.apply(this, args)            
        return observer
    }
}

export function Authorize(): any {
    return (target: Function, propertyKey: string, descriptor: PropertyDescriptor) => {
        propertyKey ? decorateMethod(target, propertyKey, descriptor) : decorateClass(target)
    }
}