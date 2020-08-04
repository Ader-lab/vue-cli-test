import service from "@/utils/request";

// 註冊
export function PostUser(form) {
    service.request({
        method: "post",
        url: "http://localhost:3333/users",
        data: form
    })
}