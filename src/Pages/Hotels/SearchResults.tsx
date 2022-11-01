// @flow 
import * as React from 'react';
import {SearchFilters} from "../../Components/Hotels/SearchFilters/SearchFilters";
import {SearchHotelResults} from "../../Components/Hotels/SearchHotelResults/SearchHotelResults";

type Props = {
    
};
export const SearchResults = (props: Props) => {
    return (
        <div className='layout relative mt-12'>
            <div className="flex space-x-5">
                <SearchFilters/>
                <SearchHotelResults/>
            </div>
        </div>
    );
};