import React from 'react'

const Toolbar = (props) => {

    var count = 0;
    props.messages.map(unread => {
        if (unread.read === false) {
            count += 1
        }

    }
    )
    return (
        <>
            <div className="row toolbar">
                <div className="col-md-12">
                    <p className="pull-right">
                        <span className="badge badge">{count}</span>
                        unread messages
                    </p>
                    <a onClick={props.toggleMessage} className="btn btn-danger">
                        <i className={`fa ${props.composeMessage ? 'fa-plus' : 'fa-minus'}`}></i>
                    </a>
                    <button className="btn btn-default">
                        <i className="fa fa-minus-square-o"></i>
                    </button>
                    <button className="btn btn-default">Mark As Read</button>
                    <button className="btn btn-default">Mark As Unread</button>
                    <select onChange={props.addLabel} className="form-control label-select">
                        <option selected disabled>Apply label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    <select onChange={props.removeLabel} className="form-control label-select">
                        <option selected disabled>Remove label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    <button className="btn btn-default">
                        <i onClick={props.deleteMail} className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Toolbar