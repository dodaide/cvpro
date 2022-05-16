import "./Export.css"
import { Link } from "react-router-dom";

function Export() {
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
                <div className="row form--paper">
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
                    <a className="btn btn--turn">Tải PDF</a>
                </div>
            </div>
        </>
    )
}

export default Export;