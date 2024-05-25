import React from 'react'
import * as divAndConq from '../divide-and-conquer'

export const useDisplayCompnentsHooks = () => {
    // configure dropdown for selecting algorithms
    const formattedOptions = Object.keys(divAndConq).map((key) => {
        return { value: key, label: key }
    })

    return {
        formattedOptions,
    }
}
