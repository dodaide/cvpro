import { useState } from "react";
import WorkList from "./WorkList";

function ExAndLearn({nameStorage, nameTitle, nameTextBox}) {
    var storageWorkExs = JSON.parse(localStorage.getItem(nameStorage));

    var [work1,setWork1] = useState(0)
    var [work2,setWork2] = useState(0)
    var [work3,setWork3] = useState('')
    var [work4,setWork4] = useState('')
    var [workExs,setWorkExs] = useState(storageWorkExs ?? [])
    var handleAdd = () => {
        setWorkExs(prev => {
            var newWork = {
                id: Math.random() * 1000,
                start: work1,
                end: work2,
                name: work3,
                content: work4
            }
            var newWorks = [...prev, newWork];
            var jsonWorks = JSON.stringify(newWorks);
            localStorage.setItem(nameStorage,jsonWorks)
            return newWorks;
        })
        setWork1(0);
        setWork2(0);
        setWork3('');
        setWork4('');
    }
    return (
        <div className="perInf--work">
            <p className="perInf--title">
                {nameTitle}
            </p>
            <div className="row perInf--row">
                <div className="col-md-2">
                    <label>Thời gian</label>
                    <div className="perInf--time">
                        <label>Từ:</label>
                        <input
                            value={work1}
                            onChange={e => {setWork1(e.target.value)}}
                            style={{ border: "0px", boxShadow: "none", textAlign: "right" }}
                            className="input--perInf"
                        />
                    </div>
                    <div className="perInf--time">
                        <label>Đến:</label>
                        <input
                            value={work2}
                            onChange={e => setWork2(e.target.value)}
                            style={{ border: "0px", boxShadow: "none", textAlign: "right" }}
                            className="input--perInf"
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <label>{nameTextBox}</label>
                    <textarea
                        value={work3}
                        onChange={e => setWork3(e.target.value)}
                        className="input--perInf inputContent--perInf"
                    />
                </div>
                <div className="col-md-6">
                    <label>Nội dung</label>
                    <textarea 
                        value={work4}
                        onChange={e => setWork4(e.target.value)}
                        className="input--perInf inputContent--perInf"
                    />
                </div>
                <div className="col-md-1">
                    <button onClick={handleAdd} className="btn perInf--btn">
                        <i className="uil uil-plus perInf--add"></i>
                    </button>
                </div>
            </div>
            {workExs.map((workEx) => (
                <WorkList
                    nameStorage={nameStorage}
                    setWorkExs={setWorkExs}
                    workExs={workExs}
                    key={workEx.id}
                    workEx={workEx}
                    nameTextBox={nameTextBox}
                />
            ))}
        </div>
    )
}

export default ExAndLearn;