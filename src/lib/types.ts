export interface Question {
  id: number,
  createAt: Date | null,
  categoryId: number,
  text: string,
  rank: number,
  star: boolean
}

export interface Category {
  id: number,
  createAt: Date | null,
  text: string,
  questions: Question[]
}

export interface Form {
  id: number,
  createAt: Date | null
  categories: Category[]
}