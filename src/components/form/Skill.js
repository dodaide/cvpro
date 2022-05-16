import { useState } from "react";
import SkillList from "./SkillList";

function Skill() {
    var storageWorkExs = JSON.parse(localStorage.getItem('skill'));

    var [skillName,setSkillName] = useState('')
    var [skillPoint,setSkillPoint] = useState(5)
    var [skills,setSkills] = useState(storageWorkExs ?? [])
    var handleAdd = () => {
        setSkills(prev => {
            var newSkill = {
                id: Math.random() * 1000,
                name: skillName,
                point: skillPoint
            }
            var newSkills = [...prev, newSkill];
            var jsonWorks = JSON.stringify(newSkills);
            localStorage.setItem('skill',jsonWorks)
            return newSkills;
        })
        setSkillName('');
        setSkillPoint(5);
    }
    return (
        <div className="perInf--work">
            <p className="perInf--title">
                Kỹ năng
            </p>
            <div className="row perInf--row">
                <div className="col-md-2">
                    <label>Kỹ năng</label>
                    <input
                        value={skillName}
                        onChange={e => {setSkillName(e.target.value)}}
                        className="input--perInf"
                    />
                </div>
                <div className="col-md-9">
                    <label>Điểm kỹ năng: {skillPoint}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        className="input--perInf inputContent--range"
                        value={skillPoint}
                        onChange={e => {setSkillPoint(e.target.value)}}
                    />
                </div>
                <div className="col-md-1">
                    <button onClick={handleAdd} className="btn perInf--btn">
                        <i className="uil uil-plus perInf--add"></i>
                    </button>
                </div>
            </div>
            {skills.map((skill) => (
                <SkillList
                    setSkills={setSkills}
                    skills={skills}
                    key={skill.id}
                    skill={skill}
                />
            ))}
        </div>
    )
}

export default Skill;