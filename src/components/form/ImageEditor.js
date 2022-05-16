function ImageEditor(){
    return (
        <div className="col-md-12 btnList--imgEditor">
            <p className="btnList--imgEditor--title">Thông số kỹ thuật</p>
            <div className="col-md-12">
                <label>Độ sáng</label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    className="input--perInf inputContent--range"
                />
            </div>
            <div className="col-md-12">
                <label>Độ mờ</label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    className="input--perInf inputContent--range"
                />
            </div>
            <div className="col-md-12">
                <label>Độ tươi</label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    className="input--perInf inputContent--range"
                />
            </div>
            <div className="col-md-12">
                <label>Độ bão hòa</label>
                <input
                    type="range"
                    min="0"
                    max="10"
                    className="input--perInf inputContent--range"
                />
            </div>
        </div>
    )
}

export default ImageEditor;