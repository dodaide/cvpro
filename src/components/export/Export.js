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
        var finalHTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
        </head>
        <style>
            * {
                box-sizing: border-box;
                margin: 0px;
                padding: 0px;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
                line-height: 24px;
                color: #003459;
            }
            
            .form--paper{
                position: relative;
                width: 1519px;
                height: 2148px;
                background: #ffffff;
                box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.08), 0px 9px 46px rgba(0, 0, 0, 0.12);
            }
            
            .paper--margin-left{
                position: absolute;
                top: 0px;
                left: 0px;
                width: 563px;
                height: 2148px;
                background: #33393B;
            }
            
            .paper--circle-container{
                position: absolute;
                bottom: 52px;
                left: 212px;
            }
            
            .block36{
                height: 92px;
            }
            
            .paper--image--container{
                margin: auto;
                text-align: center;
            }
            
            .paper--image{
                width: 378px;
                height: 567px;
                background: #ffffff;
                border-radius: 232px 232px 0px 0px;
            }
            
            .paper--contactSkill{
                width: 378px;
                margin: 62px auto;
                border: 6px solid #F2AB44;
                border-radius: 100px;
                color: white;
                text-transform: uppercase;
                font-size: 40px;
                text-align: center;
                line-height: 84px;
            }
            
            .contactSkill--body{
                display: flex;
                align-items: center;
            }
            
            .contactSkill--body + .contactSkill--body{
                margin-top: 32px;
            }
            
            .contactSkill--field{
                width: 164px;
                height: 72px;
                padding-right: 20px;
                text-align: right;
                background: #F2AB44;
                border-radius: 0px 52px 52px 0px;
                flex: 2;
            }
            
            .contactSkill--field i{
                color: white;
                line-height: 72px;
                font-size: 48px;
            }
            
            .contactSkill--content{
                padding-left: 32px;
                flex: 5;
            }
            
            .contactSkill--content--title{
                font-weight: 500;
                font-size: 32px;
                color: #FFFFFF;
                text-transform: uppercase;
                line-height: normal;
                margin: 0px;
            }
            
            .contactSkill--content--body{
                font-weight: 400;
                font-size: 26px;
                color: #FFFFFF;
                margin: 0px;
                line-height: normal;
                overflow-wrap: break-word;
                width: 336px;
            }
            
            .contactSkill--skillName{
                font-size: 26px;
                margin-bottom: 0px;
                color: #FFFFFF;
                text-align: center;
                text-transform: uppercase;
                line-height: 62px;
            }
            
            .contactSkill--skillRange{
                margin: auto;
                width: 378px;
                height: 46px;
                background: #D5D6D7;
                border-radius: 103px;
            }
            
            .contactSkill--skillLevel{
                height: 46px;
                background: #F2AB44;
                border-radius: 103px;
            }
            
            .paper--circle{
                width: 26px;
                height: 26px;
                background: #F2AB44;
                border-radius: 13px;
                display: inline-block;
                margin-inline: 10px;
            }
            
            .paper--margin-right{
                width: 956px;
                position: absolute;
                top: 0px;
                height: 2174px;
                left: 563px;
            }
            
            .paper--job{
                margin: 112px 0px 20px 0px;
                text-transform: uppercase;
                font-weight: 400;
                font-size: 52px;
                text-align: center;
                color: #000000;
            }
            
            .paper--nameBox{
                height: 156px;
                margin: 0px;
                background: #F2AB44;
            }
            
            .paper--name{
                font-weight: 500;
                line-height: 156px;
                font-size: 72px;
                text-align: center;
                color: #FFFFFF;
                margin: 0px;
            }
            
            .paper--introduce-padding{
                padding-left: 62px;
                padding-top: 52px;
            }
            
            .introduce--order{
                background-color: #F2AB44;
                color: white;
                border-radius: 77px;
                display: inline-block;
                line-height: 103px;
                width: 103px;
                height: 103px;
                font-size: 77px;
                text-align: center;
            }
            
            .introduce--title{
                text-transform: uppercase;
                margin-inline: 26px;
                color: #33393B;
                font-size: 52px;
            }
            
            .introduce--para{
                height: 154px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 5;
                font-weight: 400;
            }
            
            .introduce--para, .introduce--body-container{
                font-size: 26px;
                line-height: normal;
                margin: 0px;
                margin: 40px 128px 40px 40px;
                color: #3f4345;
            }
            
            .introduce--body-row{
                display: flex;
            }
            
            .introduce--body-row + .introduce--body-row{
                margin-top: 20px;
            }
            
            .introduce--year{
                width: 312px;
                height: 40px;
                background: #33393B;
                border-radius: 0px 104px 104px 0px;
                color: white;
                font-size: 28px;
                text-align: right;
                line-height: 40px;
                margin-left: -140px;
                padding-right: 28px;
            }
            
            .introduce--year--title{
                width: 260px;
                font-size: 32px;
                line-height: normal;
                margin: 10px 0px 0px 0px;
                color: #33393B;
            }
            
            .introduce--content--title{
                font-weight: 400;
                font-size: 32px;
                color: #000000;
                line-height: normal;
                margin: 0px;
                color: #3f4345;
            }
            
            .introduce--content--body{
                margin: 10px 0px 0px 0px;
                font-size: 26px;
                color: #000000;
                line-height: normal;
                font-weight: 400;
                color: #3f4345;
                height: 62px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
        </style>
        <body>
            ${htmlFake.current.innerHTML}
        </body>
        </html>`
        const base64HTML = base64.encode(unescape(encodeURIComponent(finalHTML)))
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
                },
                {
                    "Name": "PageRange",
                    "Value": "1"
                },
                {
                    "Name": "PageSize",
                    "Value": "a4"
                },
                {
                    "Name": "MarginTop",
                    "Value": "0"
                },
                {
                    "Name": "MarginRight",
                    "Value": "0"
                },
                {
                    "Name": "MarginBottom",
                    "Value": "0"
                },
                {
                    "Name": "MarginLeft",
                    "Value": "0"
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
                <div style={{ margin: "120px 0px 24px 0px" }}>
                    <Link to="/forms" className="btn btn--turn">Điền mẫu</Link>
                </div>
            </div>
            <div ref={htmlFake} className="form--paper">
                <div className="paper--margin-left">
                    <div className="block36"></div>
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
            <div style={{ animation: "appear 0.5s ease" }} className="container appear--animation">
                <div style={{ margin: "24px 0px 72px 0px", textAlign: "right" }}>
                    { !isLoading && (<button onClick={handleDownload} className="btn btn--turn">Tải PDF</button>) }
                    { isLoading && (<button className="btn btn--turn" disabled>Đang tải...</button>) }
                </div>
            </div>
        </>
    )
}

export default Export;