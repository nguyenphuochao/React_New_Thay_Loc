const bankReducer = (money = 0, action) => {
    if (action.type === 'deposit') {
        return money + 10;
    }
    else if (action.type === 'withraw') {
        return money - 10;
    }

    return money;
}

export default bankReducer;