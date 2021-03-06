import React from 'react'

const MessageList = (props) => {

    var messages = props.messages.map(message => {
        return (
            <div>
                <div
                    id={message.id}
                    className={`row message ${message.read ? 'read' : 'unread'} ${message.selected ? 'selected' : ''}`}>
                    <div className="col-xs-1">
                        <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" id={message.id}
                                    onClick={props.selectMail} checked={`${message.selected ? 'true' : ''}`}
                                />
                            </div>
                            <div className="col-xs-2">
                                <i id={message.id} onClick={props.markStarred} className={`star fa ${message.starred ? 'fa-star' : 'fa-star-o'}`}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-11">
                        <span className="label label-warning">{message.labels[0]}</span>
                        <span className="label label-warning">{message.labels[1]}</span>
                        <span className="label label-warning">{message.labels[2]}</span>

                        <a id={message.id} onClick={props.showBody}
                        >{message.subject}</a>
                    </div>
                </div>
                <div className={`row message-body ${message.shown ? '' : 'hidden'}`}>
                    <div className="col-xs-11 col-xs-offset-1">
                        {message.body}
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