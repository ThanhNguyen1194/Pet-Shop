import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION, LAY_DANH_SACH_MA_LOAI_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType"

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}


const initialState = {
    userLogin: user,
    thongTinNguoiDung: {},
    danhSachNguoiDung: [],
    arrMaLoaiNguoiDung: []
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken)

            return { ...state, userLogin: thongTinDangNhap }
        }

        case SET_THONG_TIN_NGUOI_DUNG: {
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            return { ...state };
        }

        case LAY_DANH_SACH_NGUOI_DUNG: {
            state.danhSachNguoiDung = action.danhSachNguoiDung
            return { ...state }
        }

        case LAY_DANH_SACH_MA_LOAI_NGUOI_DUNG: {
            state.arrMaLoaiNguoiDung = action.arrMaLoaiNguoiDung
            return { ...state }
        }

        default:
            return state
    }
}
