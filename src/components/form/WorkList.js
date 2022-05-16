function WorkList({nameStorage, workEx,setWorkExs,workExs,nameTextBox}){
    var handleRemove = () => {
        setWorkExs(() => {
            var newWorks = workExs.filter(el => el.id !== workEx.id);
            var jsonWorks = JSON.stringify(newWorks);
            localStorage.setItem(nameStorage, jsonWorks);
            return newWorks;
        });
    }

    return (
        <div className="row perInf--row">
            <div className="col-md-2">
                <label>Thời gian</label>
                <div className="perInf--time">
                    <label>Từ:</label>
                    <div className="perInf--time-number">
                        {workEx.start}
                    </div>
                </div>
                <div className="perInf--time">
                    <label>Đến:</label>
                    <div className="perInf--time-number">
                        {workEx.end}
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <label>{nameTextBox}</label>
                <div className="perInf--content">
                    {workEx.name} 
                </div>
            </div>
            <div className="col-md-6">
                <label>Nội dung</label>
                <div className="perInf--content">
                    {workEx.content}
                </div>
            </div>
            <div className="col-md-1">
                <button onClick={handleRemove} className="btn perInf--btn">
                    <i className="uil uil-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default WorkList;