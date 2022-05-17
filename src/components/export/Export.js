import "./Export.css"
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import base64 from 'base-64'

function Export() {
    const htmlFake = useRef(null);
    const [isLoading,setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);
        const base64HTML = base64.encode(unescape(encodeURIComponent(htmlFake.current.innerHTML)))
        const apiUrl = 'https://v2.convertapi.com/convert/html/to/pdf?Secret=XD6SNCUWGia6IM8u&StoreFile=true';
        const postData = {
            "Parameters": [
                {
                    "Name": "File",
                    "FileValue": {
                        "Name": "cv.html",
                        "Data": base64HTML
                    }
                },
                {
                    "Name": "StoreFile",
                    "Value": true
                }
            ]
        }
        const response = await axios.post(apiUrl, postData);
        setIsLoading(false);
        const URL = response.data.Files[0].Url;
        window.open(URL, '_blank');
    }

    var storageName = JSON.parse(localStorage.getItem('name')) ?? '';
    var storageAddress = JSON.parse(localStorage.getItem('address')) ?? '';
    var storageFb = JSON.parse(localStorage.getItem('fb')) ?? '';
    var storageSdt = JSON.parse(localStorage.getItem('sdt')) ?? '';
    var storageJobPos = JSON.parse(localStorage.getItem('jobPos')) ?? '';
    var storageAboutMe = JSON.parse(localStorage.getItem('about')) ?? '';
    var storageHocvan = JSON.parse(localStorage.getItem('hocvan')) ?? [];
    var storageEx = JSON.parse(localStorage.getItem('kinhnghiem')) ?? [];
    var storageSkill = JSON.parse(localStorage.getItem('skill')) ?? [];
    var storageAvt = JSON.parse(localStorage.getItem('avatar')) ?? '';
    return (
        <>
            <div style={{ animation: "appear 0.5s ease" }} className="container appear--animation">
                <div style={{ marginTop: "120px" }}>
                    <Link to="/forms" className="btn btn--turn">Điền mẫu</Link>
                </div>
                <div ref={htmlFake} className="row form--paper">
                    <div className="paper--margin-left">
                        <div className="paper--image--container">
                            <img className="paper--image" src={storageAvt}/>
                        </div>
                        <div className="paper--contactSkill">contact me</div>
                        <div className="contactSkill--body">
                            <div className="contactSkill--field">
                                <i className="uil uil-map-marker"></i>
                            </div>
                            <div className="contactSkill--content">
                                <p className="contactSkill--content--title">
                                    address
                                </p>
                                <p className="contactSkill--content--body">{storageAddress}</p>
                            </div>
                        </div>
                        <div className="contactSkill--body">
                            <div className="contactSkill--field">
                                <i className="uil uil-facebook-f"></i>
                            </div>
                            <div className="contactSkill--content">
                                <p className="contactSkill--content--title">
                                    facebook
                                </p>
                                <p className="contactSkill--content--body">{storageFb}</p>
                            </div>
                        </div>
                        <div className="contactSkill--body">
                            <div className="contactSkill--field">
                                <i className="uil uil-phone-alt"></i>
                            </div>
                            <div className="contactSkill--content">
                                <p className="contactSkill--content--title">
                                    phone
                                </p>
                                <p className="contactSkill--content--body">{storageSdt}</p>
                            </div>
                        </div>
                        <div className="paper--contactSkill">pro skills</div>
                        {storageSkill.map((skill,index) => {
                            return(
                            <div key={index}>
                                <p className="contactSkill--skillName">{skill.name}</p>
                                <div className="contactSkill--skillRange">
                                    <div style={{width: skill.point * 14}} className="contactSkill--skillLevel"></div>
                                </div>
                            </div>
                        )})}
                        <div className="paper--circle-container">
                            <span className="paper--circle"></span>
                            <span className="paper--circle"></span>
                            <span style={{ background: "#D5D6D7" }} className="paper--circle"></span>
                        </div>
                    </div>
                    <div className="paper--margin-right">
                        <p className="paper--job">{storageJobPos}</p>
                        <div className="paper--nameBox">
                            <p className="paper--name">{storageName}</p>
                        </div>
                        <div className="paper--introduce-padding">
                            <div className="paper--introduce">
                                <div className="introduce--header">
                                    <span className="introduce--order">1</span>
                                    <span className="introduce--title">About me</span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                </div>
                                <p className="introduce--para">{storageAboutMe}</p>
                            </div>
                            <div className="paper--introduce">
                                <div className="introduce--header">
                                    <span className="introduce--order">2</span>
                                    <span className="introduce--title">education</span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                </div>
                                <div className="introduce--body-container">
                                    {storageHocvan.map((hocVan,index) => {
                                        return(
                                            <div key={index} className="introduce--body-row">
                                                <div className="introduce--body-col-1">
                                                    <div className="introduce--year">{hocVan.start}-{hocVan.end}</div>
                                                    <p className="introduce--year--title">Học tập</p>
                                                </div>
                                                <div className="introduce--body-col-2">
                                                    <p className="introduce--content--title">{hocVan.name}</p>
                                                    <p className="introduce--content--body">{hocVan.content}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="paper--introduce">
                                <div className="introduce--header">
                                    <span className="introduce--order">3</span>
                                    <span className="introduce--title">experience</span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                    <span className="paper--circle"></span>
                                </div>
                                <div className="introduce--body-container">
                                    {storageEx.map((kinhNghiem, index) => {
                                        return(
                                            <div key={index} className="introduce--body-row">
                                                <div className="introduce--body-col-1">
                                                    <div className="introduce--year">{kinhNghiem.start}-{kinhNghiem.end}</div>
                                                    <p className="introduce--year--title">Kinh nghiệm</p>
                                                </div>
                                                <div className="introduce--body-col-2">
                                                    <p className="introduce--content--title">{kinhNghiem.name}</p>
                                                    <p className="introduce--content--body">{kinhNghiem.content}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginBottom: "72px", textAlign: "right" }}>
                    { !isLoading && (<button onClick={handleDownload} className="btn btn--turn">Tải PDF</button>) }
                    { isLoading && (<button className="btn btn--turn" disabled>Đang tải...</button>) }
                </div>
            </div>
        </>
    )
}

export default Export;