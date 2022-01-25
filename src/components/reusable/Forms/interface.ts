export interface IHTMLFieldProps {
  name: string
  label: string
  values: any
  touched: any
  errors: any
  setFieldValue: any
  onChange? :any
  handleChange? : any
  helperText? :string
}

export interface IHTMLDropDownProps {
  id?: string
  name: string
  label: string
  values: any
  touched: any
  errors: any
  setFieldValue: any
  list: string[]
}