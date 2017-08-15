
export const getData = (data) => {
    return {
        type: "GET_DATA",
        data: data
    }
}
export const handleSportClick = (index,boolean) => {
    return {
        type: "HANDLE_SPORT_CLICK",
        index:index,
        open: boolean,
    }
}
export const handleRegionClick = (index,boolean) => {
    return {
        type: "HANDLE_REGION_CLICK",
        index:index,
        open: boolean,

    }
}
