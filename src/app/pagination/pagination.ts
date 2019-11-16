

export class Pagination {

    public itemsPerPage : number;
    public currentPage : number;
    public totalItems : number;

    constructor(
        itemsPerPage: number = 20, 
        currentPage: number = 1)
    {
        this.itemsPerPage = itemsPerPage;
        this.currentPage = currentPage;
        this.totalItems = 20;
    }
}