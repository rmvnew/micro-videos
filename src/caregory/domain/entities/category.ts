export type CategoryProperties = {
    name: string
    description?: string
    is_active?: boolean
    create_at?: Date
    update_at?: Date
    price: number
}

export class Category {
    constructor(public readonly props: CategoryProperties) { }

    get name() {
        return this.props.name
    }

    get description() {
        return this.props.description
    }

    get is_active() {
        return this.props.is_active
    }

    get create_at() {
        return this.props.create_at
    }


}



//create





// Category : string name
// Category : string description
// Category : boolean is_active
// Category : date update_at
// Category : date create_at

