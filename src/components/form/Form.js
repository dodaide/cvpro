import { Link } from "react-router-dom";
import "./Form.css"
import BasicInfor from "./BasicInfor";
import ExAndLearn from "./ExAndLearn";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import WhiteOverlay from "./WhiteOverlay";

function Form(){
    return (
        <>
            <WhiteOverlay/>
            <div style={{animation: "appear 0.5s ease"}} className="container appear--animation">
                <div style={{marginTop: "120px"}}>
                    <Link to="/taocv" className="btn btn--turn">Chọn mẫu</Link>
                </div>
                <div className="form--container row">
                    <BasicInfor/>
                    <div className="col-md-10">
                        <AboutMe/>
                        <ExAndLearn
                            nameStorage="hocvan"
                            nameTitle="Học vấn"
                            nameTextBox="Học thuật"
                        />
                        <ExAndLearn
                            nameStorage="kinhnghiem"
                            nameTitle="Kinh nghiệm làm việc"
                            nameTextBox="Công việc"
                        />
                        <Skill/>
                    </div>
                </div>
                <div style={{marginBottom: "72px", textAlign: "right"}}>
                    <Link to="/export" className="btn btn--turn">Hoàn tất</Link>
                </div>
            </div>
        </>
    )
}

export default Form;