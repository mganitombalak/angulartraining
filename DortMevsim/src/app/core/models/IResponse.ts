export interface IResponse<T> {
    totalRecordCount: number;
    humanReadableMessage: Array<string>;
    data: Array<T>;
}