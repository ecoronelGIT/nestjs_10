import { IsString, MinLength, minLength } from "class-validator";

export class CreateTaskDto {
    @IsString()
    @MinLength(4)
    title: string;
    @IsString()
    @MinLength(6)
    cron: string;
}