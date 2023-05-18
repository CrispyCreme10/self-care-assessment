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
  Form: Form,
  responses: Response[]
}

export interface Response {
  CategoryId: number, 
  QuestionId: number
  Question: String,
  value: number, 
  stared: Boolean
}

// TODO: Create interface to basic Analyse