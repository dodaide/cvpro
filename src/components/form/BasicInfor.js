import { useState } from "react"
import "./Form.css"
import avatar from "./imgs/User_font_awesome.svg.png"

function openImgEditor(){
    var open = document.getElementById("white-overlay");
    open.style.display = "block";
}

function BasicInfor(){
    var storageName = JSON.parse(localStorage.getItem('name'));
    var storageAddress = JSON.parse(localStorage.getItem('address'));
    var storageFb = JSON.parse(localStorage.getItem('fb'));
    var storageSdt = JSON.parse(localStorage.getItem('sdt'));
    var storageJobPos = JSON.parse(localStorage.getItem('jobPos'));
    var storageImg = JSON.parse(localStorage.getItem('avatar'));
    var [name,setName] = useState(storageName ?? '');  
    var [address,setAddress] = useState(storageAddress ?? '');  
    var [fb,setFb] = useState(storageFb ?? '');  
    var [sdt,setSdt] = useState(storageSdt ?? '');  
    var [jobPos,setJobPost] = useState(storageJobPos ?? '');  
    return (
        <div className="col-md-2">
            <p className="perInf--title">Thông tin cơ bản</p>
            <label>Ảnh đại diện</label>
            <div onClick={openImgEditor} className="perInf--imgChoose">
                <img id="perInf--img" src={storageImg ?? avatar}/>
                <i className="uil uil-plus-circle perInf--plus"></i>
            </div>
            <div className="perInf--container">
                <label className="perInf--field">Họ và tên</label>
                <input
                    value={name}
                    className="input--perInf"
                    onChange = {e => setName(e.target.value)}
                    onBlur = {e => localStorage.setItem('name',JSON.stringify(e.target.value))}
                />
            </div>
            <div className="perInf--container">
                <label className="perInf--field">Địa chỉ</label>
                <input
                    value={address}
                    className="input--perInf"
                    onChange = {e => setAddress(e.target.value)}
                    onBlur = {e => localStorage.setItem('address',JSON.stringify(e.target.value))}
                />
            </div>
            <div className="perInf--container">
                <label className="perInf--field">Facebook</label>
                <input
                    value={fb}
                    className="input--perInf"
                    onChange = {e => setFb(e.target.value)}
                    onBlur = {e => localStorage.setItem('fb',JSON.stringify(e.target.value))}
                />
            </div>
            <div className="perInf--container">
                <label className="perInf--field">Số điện thoại</label>
                <input
                    value={sdt}
                    className="input--perInf"
                    onChange = {e => setSdt(e.target.value)}
                    onBlur = {e => localStorage.setItem('sdt',JSON.stringify(e.target.value))}
                />
            </div>
            <div className="perInf--container">
                <label className="perInf--field">Nghề nghiệp</label>
                <input
                    value={jobPos}
                    className="input--perInf"
                    onChange = {e => setJobPost(e.target.value)}
                    onBlur = {e => localStorage.setItem('jobPos',JSON.stringify(e.target.value))}
                />
            </div>
            <div className="perInf--suggest">
                <p className="perInf--suggest--tittle">Lưu ý</p>
                <ol>
                    <li>Nên tải ảnh có kích thước 3/2</li>
                    <li>Chức năng chỉnh thông số ảnh tạm thời chưa sử dụng được</li>
                    <li>Chỉ nên điền tối đa 4 hàng ở mỗi phần</li>
                </ol>
                <p className="perInf--suggest--tittle">Thông tin chung</p>
                <ol>
                    <li>Ưu tiên thông tin quan trọng, liên quan tới vị trí tuyển dụng lên đầu</li>
                    <li>Viết hoa tên riêng</li>
                </ol>
            </div>
        </div>
    )
}

export default BasicInfor;