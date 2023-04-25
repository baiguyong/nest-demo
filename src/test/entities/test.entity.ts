import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Test {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    // @Column()
    // password: string

    // @Generated('uuid')
    // uuid: string

    @Column()
    age: number

    // @Column({
    //     type: "enum",
    //     enum: [1, 2, 3],
    //     default: 1
    // })
    // xioaman: number

    // @CreateDateColumn()
    // creatime: Date

    // @Column('simple-array')
    // names: string[]


    // @Column('simple-json')
    // json: { name: string, age: number }
}
