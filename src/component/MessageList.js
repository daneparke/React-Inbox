import React from 'react'

const MessageList = (props) => {

    var messages = props.messages.map(message => {
        var labels = ''
        for (var i = 0; i < props.messages.label.length; i++) {
            labels += props.messages.label[i]
        }
        return (
            // <div className='row'>
            //     <label className="custom-checkbox">
            //         <input type="checkbox" />
            //         <i className="glyphicon glyphicon-star-empty"></i>
            //         <i className="glyphicon glyphicon-star"></i>
            //         <div className='col-2 messageLabels'>{message.lables}</div>
            //         <div className='col-8 messageSubject'>{message.subject}</div>
            //     </label>
            // </div>
            <div className="row message unread">
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" />
                        </div>
                        <div className="col-xs-2">
                            <i className="star fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <div className='row'>
                        <p className='messageLabels'>
                            {message.labels[0]} {message.labels[1]}
                            <a href="#">
                                {message.subject}
                            </a>
                        </p>
                        {/* <a href="#">
                            {message.subject}
                        </a> */}
                    </div>
                </div>
            </div>
        )
    })


    return (
        <>
            <div className='container messageListContainer'>
                {messages}

            </div>
        </>
    )
}
export default MessageList