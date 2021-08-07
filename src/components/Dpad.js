function Dpad() {

    return (
        <div className="outerdpad">
            <div className="translation">
                <div className="dpad"></div>
                <div className="dpad move fastdown"></div>
                <div className="dpad"></div>
                <div className="dpad move left"></div>
                <div className="dpad"></div>
                <div className="dpad move right"></div>
                <div className="dpad"></div>
                <div className="dpad move down"></div>
                <div className="dpad"></div>
            </div>
            <div className="rotation">
                <div className="dpad"></div>
                <div className="dpad"></div>
                <div className="dpad"></div>
                <div className="dpad"></div>
                <div className="dpad move left"></div>
                <div className="dpad move right"></div>
                <div className="dpad"></div>
                <div className="dpad"></div>
                <div className="dpad"></div>
            </div>
        </div>
    ) 
}

export default Dpad 