import React from 'react'
import { Search as SearchExport } from './Search.component'
import { Searchbar as SearchbarExport } from './Searchbar.component'
import { SearchbarDesktop as SearchbarDesktopExport } from './SearchbarDesktop.component'
import { MainSearchbar as MainSearchbarExport } from './MainSearchbar.component'
import { MainSearchbarDesktop, MainSearchbarDesktop as MainSearchbarDesktopExport } from './MainSearchbarDesktop.component'
import { PriceSlider as PriceSliderExport } from './PriceSlider.component'
import { ZoneSearch as ZoneSearchExport } from './ZoneSearch.component'
import { ZoneSearchDesktop as ZoneSearchDesktopExport } from './ZoneSearchDesktop.component'
import { NoResults as NoResultsExport } from './NoResults'

export function SearchComponent(props: any) {
	return <SearchExport {...props} />
}

export function SearchbarComponent(props: any) {
	return <SearchbarExport {...props} />
}

export function SearchbarDesktopComponent(props: any) {
	return <SearchbarDesktopExport {...props} />
}

export function MainSearchbarComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <MainSearchbarExport {...props} /> : <MainSearchbarDesktop {...props} />
}

export function PriceSliderComponent(props: any) {
	return <PriceSliderExport {...props} />
}

export function ZoneSearchComponent(props: any) {
	let mobile = window.innerWidth
	return mobile < 750 ? <ZoneSearchExport {...props} /> : <ZoneSearchDesktopExport {...props} />
}

export function NoResultsComponent(props: any) {
	return <NoResultsExport {...props} />
}