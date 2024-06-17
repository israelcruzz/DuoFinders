export class ExistAd extends Error {
    constructor() {
        super('There is already an ad for this game')
    }
}