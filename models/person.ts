import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class Person extends Model<Person> {
    @Column
    public name: string

    public validateName(): boolean {
        return this.name && this.name.length > 0
    }
}
