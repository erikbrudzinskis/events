export default class MyEvent {
    constructor(public id: string,
                public title: string,
                public date: string,
                public address: string,
                public description: string,
                public imagePath: string,
                public isFeatured: boolean) {
    }
}
