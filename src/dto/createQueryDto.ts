import { IsNotEmpty } from "class-validator";

export class createQueryDto {
    @IsNotEmpty()
    readonly id_provaider: string;
    @IsNotEmpty()
    readonly query: string;
    @IsNotEmpty()
    readonly wallet: string;
}