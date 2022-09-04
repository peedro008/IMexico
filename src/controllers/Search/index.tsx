import React from 'react'
import { Search as SearchExport } from './Search.controller'
import { PriceSlider as PriceSliderExport } from './PriceSlider.controller'
import { Searchbar as SearchbarExport } from './Searchbar.controller'
import { SearchbarDesktop as SearchbarDesktopExport } from './SearchbarDesktop.controller'
import { MainSearchbar as MainSearchbarExport } from './MainSearchbar.controller'
import { ZoneSearch as ZoneSearchExport } from './ZoneSearch.controller'

export function SearchController(props: any) {
	return <SearchExport {...props} />
}

export function SearchbarController(props: any) {
	return <SearchbarExport {...props} />
}

export function SearchbarDesktopController(props: any) {
	return <SearchbarDesktopExport {...props} />
}

export function MainSearchbarController(props: any) {
	return <MainSearchbarExport {...props} />
}

export function PriceSliderController(props: any) {
	return <PriceSliderExport {...props} />
}

export function ZoneSearchController(props: any) {
	return <ZoneSearchExport {...props} />
}
