export class CategoryDoesNotExists extends Error {
    constructor() {
        super('Category does not exists')
    }
}