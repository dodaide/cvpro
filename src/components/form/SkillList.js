function SkillList({setSkills,skills,skill}){
    var handleRemove = () => {
        setSkills(() => {
            var newSkills = skills.filter(el => el.id !== skill.id);
            var jsonWorks = JSON.stringify(newSkills);
            localStorage.setItem('skill', jsonWorks);
            return newSkills;
        });
    }
    return (
        <div className="row perInf--row">
            <div className="col-md-2">
                <label>Kỹ năng</label>
                <div className="perInf--content">
                    {skill.name} 
                </div>
            </div>
            <div className="col-md-9">
                <label>Điểm kỹ năng: {skill.point}</label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    className="input--perInf inputContent--range"
                    value={skill.point}
                    onChange={e => {skill.point = e.target.value}}
                />
            </div>
            <div className="col-md-1">
                <button onClick={handleRemove} className="btn perInf--btn">
                    <i className="uil uil-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default SkillList;