import { InjectorDecorator } from './injectorDecorator';
export function spinner() {
    return function (target: Object, propertyKey: string, propertyDescriptor: PropertyDescriptor) {
        const original = propertyDescriptor.value;
        propertyDescriptor.value = function (...args: []) {
            const loadingService = InjectorDecorator.getLoadingService();
            let dispose:any  = undefined;
            const hide = () => {
                dispose && dispose();
                loadingService.hide()
            }
            
            loadingService.show();
            const result = original.apply(this, args);
            dispose = result.subscribe({
                error:hide,
                complete:hide
            });
            return result;
        };
    }
}