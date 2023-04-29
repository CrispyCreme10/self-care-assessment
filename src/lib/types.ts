export interface Question {
  QuestionId: number,
  Question: string
  CategoryId: number,
  CreateDt: Date | null,
  UpdatedDt: Date | null,
}

export interface Category {
  CategoryId: number,
  Category: string,
  CreateDt: Date | null,
  UpdatedDt: Date | null
}

export interface Form {
  FormId: number,
  UserId: number,
  CreatedDt: Date,
  UpdateDt: Date,
}

export interface UserData {
  UserId: number, 
  QuestionId: number, 
  FormId: number, 
  Answer: number, 
  Improve: Boolean
}

export interface Assessment {
  form: Form,
  ResponseGroups: ResponseGoup[]
}

export interface ResponseGoup {
  CatigoryId: number, 
  Cateigory: string, 
  Responses: Response[],
}

export interface Response {
  QuestionId: number
  Question: String,
  CatigoryId: number, 
  value: number, 
  started: boolean
}