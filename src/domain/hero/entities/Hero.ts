export class Hero {
    constructor(
        public readonly id: number,
        public readonly title: string,
        public readonly name: string,
        public readonly lastname: string,
        public readonly description: string,
        public readonly callToAction: string
    ) {
    }
}