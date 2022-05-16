import { useState } from "react";

function AboutMe(){
    var storage = JSON.parse(localStorage.getItem('about'))

    var [inputAboutMe,setInPutAboutMe] = useState(storage ?? '');
    return(
        <div className="perInf--work">
            <p className="perInf--title">
                Về tôi
            </p>
            <textarea
                className="input--perInf"
                style={{height: "104px"}}
                value={inputAboutMe}
                onChange = {e=>setInPutAboutMe(e.target.value)}
                onBlur = {e => localStorage.setItem('about',JSON.stringify(e.target.value))}
            />
        </div>
    )
}

export default AboutMe;