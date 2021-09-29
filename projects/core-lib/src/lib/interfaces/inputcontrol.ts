import { AbstractControl } from "@angular/forms";

export interface InputControl{
    name: String;
    control: AbstractControl | null;
}
