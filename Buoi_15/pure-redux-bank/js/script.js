// dùng hàm createStore để tạo store từ module window.Redux
const { createStore } = window.Redux;

// tạo store , tuy nhiên tạo store cần reducer nên phải khai báo reducer trước
// reducer chẳng qua là 1 cái hàm
// money là state
const bankReducer = (money = 0, action) => {
    if (action.type === 'deposit') {
        return money + 10;
    }
    else if (action.type === 'withraw') {
        return money - 10;
    }

    return money;
}

const store = createStore(bankReducer);

// tham số của hàm subcrire là 1 hàm (callback function)
const refreshGUI = () => {
    // lấy State dùng getState có sẵn trong store
    const money = store.getState();
    const result = document.querySelector('#result');
    result.innerHTML = money;
}
// hàm subcribe có sẵn trong store
// đăng kí hàm refreshGUI
// hàm refreshGUI sẽ được gọi khi dispatch một action lên store
store.subscribe(refreshGUI);

// khi click vào button thì sẽ dispatch 1 hành động lên store
const depositBtn = document.querySelector('[data=deposit]');
depositBtn.onclick = function () {
    const action = { type: 'deposit' }
    store.dispatch(action);
}

const withrawtBtn = document.querySelector('[data=withraw]');
withrawtBtn.onclick = function () {
    const action = { type: 'withraw' }
    store.dispatch(action);
}