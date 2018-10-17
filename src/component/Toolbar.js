import React from 'react'

const Toolbar = (props) => {
    return (
        <>
            <div className="row toolbar">
                <div className="col-md-12">
                    <p className="pull-right">
                        <span className="badge badge">2</span>
                        unread messages
                </p>
                    <a className="btn btn-danger col-md-1">
                        <i className="fa fa-plus"></i>
                    </a>
                    <button className="btn btn-default col-md-1">
                        <i className="fa fa-minus-square-o"></i>
                    </button>
                    <button className="btn btn-default col-md-2">Mark As Read</button>
                    <button className="btn btn-default col-md-2">Mark As Unread</button>
                    <select className="form-control label-select col-md-1" style={{ width: '150px' }}>
                        <option>Apply label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    <select className="form-control label-select col-md-1" style={{ width: '150px' }}>
                        <option>Remove label</option>
                        <option value="dev">dev</option>
                        <option value="personal">personal</option>
                        <option value="gschool">gschool</option>
                    </select>
                    <button className="btn btn-default col-md-1">
                        <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Toolbar