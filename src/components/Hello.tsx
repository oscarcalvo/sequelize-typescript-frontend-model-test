import * as React from 'react'
import { Button } from './Button'
import {Person} from './../../models/person'
import { Car } from '../../models/car'
interface HelloProps {
    compiler: string
    framework: string
    bundler: string   
}

interface HelloState {
    showButton: boolean
}

export class Hello extends React.Component<HelloProps, HelloState> {
    constructor(props: HelloProps) {
        super(props)
        this.state = {
            showButton: false
        }     
        const car=new Car()
        car.name="Ford"
        console.log(car.name)
        console.log("Validation:"+car.validateObject())

        const person=  new Person()
        person.name="John"
        console.log(person.name)
        console.log("Validation:"+person.validateName())
    }

    public render() {
        const elements: Array<React.ReactElement<any>> = []
        if (this.state.showButton) {
            elements.push(
                <div>
                    <Button hideButton={this.hideButton} />
                </div>
            )
        } else {
            elements.push(
                <div>
                    <h1>
                       Hi 
                    </h1>
                    <a onClick={this.showButton}>Click me!</a>
                </div>
            )
        }

        return elements
    }

    private showButton = () => {
        this.setState({ showButton: true })
    }

    private hideButton = () => {
        this.setState({ showButton: false })
    }
}
