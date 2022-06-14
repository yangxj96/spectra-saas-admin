
export default interface IResult<T> {
    code: number,
    message: string,
    data?: T
}

