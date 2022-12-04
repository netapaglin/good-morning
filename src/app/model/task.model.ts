import {v4} from 'uuid'

export class Task {
  id:string = v4()
  name:string

  constructor(
    public body:string
    ){ }

}


