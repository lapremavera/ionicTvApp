import { TvShow } from "./tvshow";

export interface ApiResult {

    pages: number;
    page: number;
    total: string;

    tv_shows: TvShow [];
    


}