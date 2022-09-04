import React from 'react'
import { Search as SearchExport } from './Search.view'
import { ZoneSearch as ZoneSearchExport } from './ZoneSearch.view'

export function SearchView(props: any) {
	return <SearchExport {...props} />
}

export function ZoneSearchView(props: any) {
	return <ZoneSearchExport {...props} />
}