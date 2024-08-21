import axios from "axios";

// xác thực token đăng nhập
export const axiosAuthInstance = () => axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiTmd1eVx1MWVjNW4gSFx1MWVlZnUgTFx1MWVkOWMiLCJlbWFpbCI6Im5ndXllbmh1dWxvY2xhMjAwNkBnbWFpbC5jb20iLCJpZCI6IjEifQ.wbnPyx2ya4r3JubDJeWaEHPPlVxQDZIr0cpOUXjSbdQ`
    }
});

// không xác thực
export const axiosNonAuthInstance = () => axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});