// import "./Export.css"
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
                <div ref={htmlFake} style={{display: "flex",position: "relative",width: "595px",height: "842px",margin: "24px auto",background: "#ffffff",boxShadow: "0px 24px 38px rgba(0, 0, 0, 0.08), 0px 9px 46px rgba(0, 0, 0, 0.12)"}} >
                    <div style={{width: "218px",height: "100%",background: "#33393B"}}>
                        <div style={{margin: "36px auto 0px auto",textAlign: "center"}}>
                            <img style={{width: "146px",height: "219px",background: "#ffffff",borderRadius: "90px 90px 0px 0px"}} src={storageAvt}/>
                        </div>
                        <div style={{width: "139px",margin: "24px auto",border: "2px solid #F2AB44",borderRadius: "40px",color: "white",textTransform: "uppercase",fontSize: "16px",textAlign: "center",lineHeight: "33px"}}>contact me</div>
                        <div style={{display: "flex",alignItems: "center",marginBottom: "12px"}}>
                            <div style={{width: "63px",height: "28px",paddingRight: "8px",textAlign: "right",background: "#F2AB44",borderRadius: "0px 20px 20px 0px",flex: "2"}}>
                                <i style={{color: "white",lineHeight: "28px"}} className="uil uil-map-marker"></i>
                            </div>
                            <div style={{paddingLeft: "12px",flex: "5"}}>
                                <p style={{fontWeight: "500",fontSize: "12px",color: "#FFFFFF",textTransform: "uppercase",lineHeight: "normal",margin: "0px"}}>
                                    address
                                </p>
                                <p charSet="UTF-8" style={{fontWeight: "400",fontSize: "10px",color: "#FFFFFF",margin: "0px",lineHeight: "normal",overflowWrap: "break-word",width: "130px"}}>{storageAddress}</p>
                            </div>
                        </div>
                        <div style={{display: "flex",alignItems: "center",marginBottom: "12px"}}>
                            <div style={{width: "63px",height: "28px",paddingRight: "8px",textAlign: "right",background: "#F2AB44",borderRadius: "0px 20px 20px 0px",flex: "2"}}>
                                <i style={{color: "white",lineHeight: "28px"}} className="uil uil-facebook-f"></i>
                            </div>
                            <div style={{paddingLeft: "12px",flex: "5"}}>
                                <p style={{fontWeight: "500",fontSize: "12px",color: "#FFFFFF",textTransform: "uppercase",lineHeight: "normal",margin: "0px"}}>
                                    facebook
                                </p>
                                <p style={{fontWeight: "400",fontSize: "10px",color: "#FFFFFF",margin: "0px",lineHeight: "normal",overflowWrap: "break-word",width: "130px"}}>{storageFb}</p>
                            </div>
                        </div>
                        <div style={{display: "flex",alignItems: "center"}}>
                            <div style={{width: "63px",height: "28px",paddingRight: "8px",textAlign: "right",background: "#F2AB44",borderRadius: "0px 20px 20px 0px",flex: "2"}}>
                                <i style={{color: "white",lineHeight: "28px"}} className="uil uil-phone"></i>
                            </div>
                            <div style={{paddingLeft: "12px",flex: "5"}}>
                                <p style={{fontWeight: "500",fontSize: "12px",color: "#FFFFFF",textTransform: "uppercase",lineHeight: "normal",margin: "0px"}}>
                                    Phone
                                </p>
                                <p style={{fontWeight: "400",fontSize: "10px",color: "#FFFFFF",margin: "0px",lineHeight: "normal",overflowWrap: "break-word",width: "130px"}}>{storageSdt}</p>
                            </div>
                        </div>
                        <div style={{width: "139px",margin: "24px auto",border: "2px solid #F2AB44",borderRadius: "40px",color: "white",textTransform: "uppercase",fontSize: "16px",textAlign: "center",lineHeight: "33px"}}>pro skills</div>
                        {storageSkill.map((skill,index) => {
                            return(
                            <div key={index}>
                                <p style={{fontSize: "10px",marginBottom: "0px",color: "#FFFFFF",textAlign: "center",textTransform: "uppercase",lineHeight: "24px"}}>{skill.name}</p>
                                <div style={{margin: "auto",width: "140px",height: "18px",background: "#D5D6D7",borderRadius: "40px"}}>
                                    <div style={{width: skill.point * 14,height: "18px",background: "#F2AB44",borderRadius: "40px"}}></div>
                                </div>
                            </div>
                        )})}
                        <div style={{position: "absolute", bottom: "12px",left: "82px"}}>
                            <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                            <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                            <span style={{background: "#D5D6D7",width: "10px",height: "10px",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                        </div>
                    </div>
                    <div style={{width: "377px"}}>
                        <p style={{margin: "32px 0px 8px 0px",textTransform: "uppercase",fontWeight: "400",fontSize: "20px",textAlign: "center",color: "#000000"}}>{storageJobPos}</p>
                        <div style={{height: "61px",margin: "0px",background: "#F2AB44"}}>
                            <p style={{fontWeight: "500",lineHeight: "61px",fontSize: "28px",textAlign: "center",color: "#FFFFFF",margin: "0px"}}>{storageName}</p>
                        </div>
                        <div style={{paddingLeft: "24px",paddingTop: "20px"}}>
                            <div>
                                <div>
                                    <span style={{backgroundColor: "#F2AB44",color: "white",borderRadius: "30px",display: "inline-block",lineHeight: "40px",width: "40px",height: "40px",fontSize: "30px",textAlign: "center"}}>1</span>
                                    <span style={{display: "inline-block",width: "120px",textTransform: "uppercase",marginInline: "10px",color: "#33393B"}}>About me</span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                </div>
                                <p style={{height: "60px",overflow: "hidden",display: "-webkit-box",WebkitBoxOrient: "vertical",WebkitLineClamp: "5",fontWeight: "400",fontSize: "10px",lineHeight: "normal",margin: "16px 50px 16px 16px",color: "#3f4345"}} >{storageAboutMe}</p>
                            </div>
                            <div>
                                <div>
                                    <span style={{backgroundColor: "#F2AB44",color: "white",borderRadius: "30px",display: "inline-block",lineHeight: "40px",width: "40px",height: "40px",fontSize: "30px",textAlign: "center"}}>2</span>
                                    <span style={{display: "inline-block",width: "120px",textTransform: "uppercase",marginInline: "10px",color: "#33393B"}}>Education</span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                </div>
                                <div style={{fontSize: "10px",lineHeight: "normal",margin: "16px 50px 16px 16px",color: "#3f4345"}}>
                                    {storageHocvan.map((hocVan,index) => {
                                        return(
                                            <div key={index} style={{display: "flex",marginTop: "8px"}}>
                                                <div>
                                                    <div style={{width: "120px",height: "15px",background: "#33393B",borderRadius: "0px 40px 40px 0px",color: "white",fontSize: "11px",textAlign: "right",lineHeight: "15px",marginLeft: "-40px",paddingRight: "11px"}}>{hocVan.start}-{hocVan.end}</div>
                                                    <p style={{width: "100px",fontSize: "12px",lineHeight: "normal",margin: "4px 0px 0px 0px",color: "#33393B"}}>Học tập</p>
                                                </div>
                                                <div>
                                                    <p style={{width: "100px",fontSize: "12px",lineHeight: "normal",margin: "4px 0px 0px 0px",color: "#33393B"}}>{hocVan.name}</p>
                                                    <p style={{margin: "4px 0px 0px 0px",fontSize: "10px",color: "#000000",lineHeight: "normal",fontWeight: "400",color: "#3f4345",height: "24px",overflow: "hidden",display: "-webkit-box",WebkitBoxOrient: "vertical",WebkitLineClamp: "2"}}>{hocVan.content}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span style={{backgroundColor: "#F2AB44",color: "white",borderRadius: "30px",display: "inline-block",lineHeight: "40px",width: "40px",height: "40px",fontSize: "30px",textAlign: "center"}}>3</span>
                                    <span style={{display: "inline-block",width: "120px",textTransform: "uppercase",marginInline: "10px",color: "#33393B"}}>experience</span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                    <span style={{width: "10px",height: "10px",background: "#F2AB44",borderRadius: "5px",display: "inline-block",marginInline: "4px"}}></span>
                                </div>
                                <div style={{fontSize: "10px",lineHeight: "normal",margin: "16px 50px 16px 16px",color: "#3f4345"}}>
                                    {storageEx.map((kinhNghiem,index) => {
                                        return(
                                            <div key={index} style={{display: "flex",marginTop: "8px"}}>
                                                <div>
                                                    <div style={{width: "120px",height: "15px",background: "#33393B",borderRadius: "0px 40px 40px 0px",color: "white",fontSize: "11px",textAlign: "right",lineHeight: "15px",marginLeft: "-40px",paddingRight: "11px"}}>{kinhNghiem.start}-{kinhNghiem.end}</div>
                                                    <p style={{width: "100px",fontSize: "12px",lineHeight: "normal",margin: "4px 0px 0px 0px",color: "#33393B"}}>Kinh nghiệm</p>
                                                </div>
                                                <div>
                                                    <p style={{width: "100px",fontSize: "12px",lineHeight: "normal",margin: "4px 0px 0px 0px",color: "#33393B"}}>{kinhNghiem.title}</p>
                                                    <p style={{margin: "4px 0px 0px 0px",fontSize: "10px",color: "#000000",lineHeight: "normal",fontWeight: "400",color: "#3f4345",height: "24px",overflow: "hidden",display: "-webkit-box",WebkitBoxOrient: "vertical",WebkitLineClamp: "2"}}>{kinhNghiem.content}</p>
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