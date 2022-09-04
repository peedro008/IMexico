export default interface State {
  status: number
  message: string
  data: any | any[]
  fetching: boolean
	fetched: boolean
	error: any
}