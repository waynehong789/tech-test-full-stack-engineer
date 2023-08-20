export interface IQueryHandler<T = any, TRes = any> {
    execute(query: T): Promise<TRes>;
}