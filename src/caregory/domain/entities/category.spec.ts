import { Category } from "./category"

describe("Category Unit Test", (): void => {
    test('constructor of category', () => {
        ///Triple AAA - Arrange Act Assert


        const create_at = new Date
        const category = new Category({
            name: 'Movie',
            description: 'some description',
            is_active: true,
            create_at,
            price: 12
        })


        // expect(category.name).toBe('Movie')
        // expect(category.description).toBe('some description')
        // expect(category.is_active).toBeTruthy()
        // expect(category.create_at).toBe(create_at)
        expect(category.props).toStrictEqual({
            name: 'Movie',
            description: 'some description',
            is_active: true,
            create_at
        })
    })
})