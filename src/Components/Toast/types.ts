
export enum toastTypes {
    success='success',
    error ='error',
    info='info',
    warning='warning'

}

export interface content {
    type:string,
    title: string,
    discription: string
}
