import "./Final.css"
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
        <div className="row formpaper">
            <div className="papermarginleft">
                <div className="paperimagecontainer">
                    <img className="paperimage" src={storageAvt}/>
                </div>
                <div className="papercontactSkill">contact me</div>
                <div className="contactSkillbody">
                    <div className="contactSkillfield">
                        <i className="uil uil-map-marker"></i>
                    </div>
                    <div className="contactSkillcontent">
                        <p className="contactSkillcontenttitle">
                            address
                        </p>
                        <p className="contactSkillcontentbody">{storageAddress}</p>
                    </div>
                </div>
                <div className="contactSkillbody">
                    <div className="contactSkillfield">
                        <i className="uil uil-facebook-f"></i>
                    </div>
                    <div className="contactSkillcontent">
                        <p className="contactSkillcontenttitle">
                            facebook
                        </p>
                        <p className="contactSkillcontentbody">{storageFb}</p>
                    </div>
                </div>
                <div className="contactSkillbody">
                    <div className="contactSkillfield">
                        <i className="uil uil-phone-alt"></i>
                    </div>
                    <div className="contactSkillcontent">
                        <p className="contactSkillcontenttitle">
                            phone
                        </p>
                        <p className="contactSkillcontentbody">{storageSdt}</p>
                    </div>
                </div>
                <div className="papercontactSkill">pro skills</div>
                {storageSkill.map((skill,index) => {
                    return(
                    <div key={index}>
                        <p className="contactSkillskillName">{skill.name}</p>
                        <div className="contactSkillskillRange">
                            <div style={{width: skill.point * 14}} className="contactSkillskillLevel"></div>
                        </div>
                    </div>
                )})}
                <div className="papercirclecontainer">
                    <span className="papercircle"></span>
                    <span className="papercircle"></span>
                    <span style={{ background: "#D5D6D7" }} className="papercircle"></span>
                </div>
            </div>
            <div className="papermarginright">
                <p className="paperjob">{storageJobPos}</p>
                <div className="papernameBox">
                    <p className="papername">{storageName}</p>
                </div>
                <div className="paperintroducepadding">
                    <div className="paperintroduce">
                        <div className="introduceheader">
                            <span className="introduceorder">1</span>
                            <span className="introducetitle">About me</span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                        </div>
                        <p className="introducepara">{storageAboutMe}</p>
                    </div>
                    <div className="paperintroduce">
                        <div className="introduceheader">
                            <span className="introduceorder">2</span>
                            <span className="introducetitle">education</span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                        </div>
                        <div className="introducebodycontainer">
                            {storageHocvan.map((hocVan,index) => {
                                return(
                                    <div key={index} className="introducebodyrow">
                                        <div className="introducebodycol1">
                                            <div className="introduceyear">{hocVan.start}-{hocVan.end}</div>
                                            <p className="introduceyeartitle">Học tập</p>
                                        </div>
                                        <div className="introducebodycol2">
                                            <p className="introducecontenttitle">{hocVan.name}</p>
                                            <p className="introducecontentbody">{hocVan.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="paperintroduce">
                        <div className="introduceheader">
                            <span className="introduceorder">3</span>
                            <span className="introducetitle">experience</span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                            <span className="papercircle"></span>
                        </div>
                        <div className="introducebodycontainer">
                            {storageEx.map((kinhNghiem, index) => {
                                return(
                                    <div key={index} className="introducebodyrow">
                                        <div className="introducebodycol1">
                                            <div className="introduceyear">{kinhNghiem.start}-{kinhNghiem.end}</div>
                                            <p className="introduceyeartitle">Kinh nghiệm</p>
                                        </div>
                                        <div className="introducebodycol2">
                                            <p className="introducecontenttitle">{kinhNghiem.name}</p>
                                            <p className="introducecontentbody">{kinhNghiem.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Export;