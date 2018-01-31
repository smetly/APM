import { PipeTransform, Pipe } from 'angular2/core';
import { IProperty } from './property';

@Pipe({
    name: 'propertyFilter'
})

export class PropertyFilterPipe implements PipeTransform{
    transform(value: IProperty[], args: string[]): IProperty[]{
        let filter: string = args[0] ? args[0].toLocaleLowerCase(): null;

        return filter ? value.filter((property: IProperty) =>
        property.AccountNumber.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}
