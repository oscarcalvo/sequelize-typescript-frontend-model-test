import { Column, Model, Table } from 'sequelize-typescript'

@Table({})
export class Person extends Model<Person> {
    @Column
    public personName: string

    public validateName(): boolean {
        return true
    }
}
