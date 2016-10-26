export class GamePiece
{
    constructor(value:number, position:string)
    {
        this.position = position;
        this.value = value;
    }

    position: string;
    value: number;
}