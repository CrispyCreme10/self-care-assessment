export interface Question {
  QuestionId: number,
  Question: string
  CategoryId: number,
  CreateAt: Date | null,
  UpdatedAt: Date | null,
  rank: number,
  star: string
}

export interface Category {
  CategoryId: number,
  Category: string,
  Questions: Question[],
  CreateAt: Date | null,
  UpdatedAt: Date | null
}

export interface Form {
  FormId: number,
  UserId: number,
  CreateAt: Date | null,
  UpdatedAt: Date | null,
  Categories: Category[]
}

export interface UserData {
  UserId: number, 
  QuestionId: number, 
  FormId: number, 
  Answer: number, 
  Improve: string
}