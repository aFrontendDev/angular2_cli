export class About {
    public name: string;
    public done: boolean;

    static clone(about: About): About {
        return new About(about.name, about.done);
    }

    constructor(name: string, done = false) {
        this.name = name;
        this.done = done;
    }

    clear() {
        this.name = '';
        this.done = false;
    }
}
