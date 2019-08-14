export class Car {
    public name: string

    public validateObject(): boolean {
        return this.name && this.name.length > 0
    }
}
