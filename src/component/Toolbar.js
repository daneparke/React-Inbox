import React from 'react'

const Toolbar = (props) => {

    var count = 0;
    var plural = false;
    props.messages.map(unread => {
        if (unread.read === false) {
            count += 1
        }
    }
    )
    if (count === 1) {
        plural = true;
    }

    return (
        <>
            <div className="row toolbar">
                <div className="col-md-12">
                    <p className="pull-right">
                        <span className="badge badge">
                            {count}
                        </span>
                        {`unread message${plural ? '' : 's'}`}
                        {/* unread messages */}
                    </p>
                    <a onClick={props.toggleMessage} className="btn btn-danger">
                        <i className={`fa ${props.composeMessage ? 'fa-plus' : 'fa-minus'}`}></i>
                    </a>
                    <button onClick={props.selectAll} className="btn btn-default">
                        <i className={`fa ${props.allSelected ? 'fa-check-square-o' : props.someSelected ? 'fa-minus-square-o' : 'fa-square-o'}`}></i>
                    </button>
                    <button onClick={props.markRead} className="btn btn-default">Mark As Read</button>
                    <button onClick={props.markUnread} className="btn btn-default">Mark As Unread</button>
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