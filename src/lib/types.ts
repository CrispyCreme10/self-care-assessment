export interface Question {
  QuestionId: number,
  Question: string
  CategoryId: number,
  CreateDt: Date | null,
  UpdatedDt: Date | null,
  rank: number,
  star: Boolean
}

export interface Category {
  CategoryId: number,
  Category: string,
  Questions: Question[],
  CreateDt: Date | null,
  UpdatedDt: Date | null
}

export interface Form {
  FormId: number,
  UserId: number,
  CreatedDt: Date,
  UpdateDt: Date,
  Categories: Category[]
}

export interface UserData {
  UserId: number, 
  QuestionId: number, 
  FormId: number, 
  Answer: number, 
  Improve: Boolean
}