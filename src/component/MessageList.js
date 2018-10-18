import React from 'react'

const MessageList = (props) => {

    // const showBody = () => {
    //     var menuRow = document.querySelectorAll('.message-body')
    //     for (var i = 0; i < menuRow.length; i++) {
    //         menuRow[i].addEventListener('click', function (event) {
    //             if (event.target.parentNode.classList.contains('hidden')) {
    //                 event.target.parentNode.classList.remove('hidden')
    //             } else if (event.target.classList.contains('hidden')) {
    //                 event.target.classList.remove('hidden')
    //             } else if (event.target.classList.contains('menuRows')) {
    //                 event.target.classList.add('hidden')
    //             } else if (event.target.parentNode.classList.contains('menuRows')) {
    //                 event.target.parentNode.classList.add('hidden')
    //             }
    //         })
    //     }
    //     return showBody
    // }




    var messages = props.messages.map(message => {
        return (
            <div>
                <div
                    // onClick={this.showBody} 
                    className={`row message ${message.read ? 'read' : 'unread'} ${message.selected ? 'selected' : ''}`}>
                    <div className="col-xs-1">
                        <div className="row">
                            <div className="col-xs-2">
                                <input type="checkbox" />
                            </div>
                            <div className="col-xs-2">
                                <i className={`star fa ${message.starred ? 'fa-star-o' : 'fa-star'}`}></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-11">
                        <span className="label label-warning">{message.labels[0]}</span>
                        <span className="label label-warning">{message.labels[1]}</span>
                        <span className="label label-warning">{message.labels[2]}</span>

                        <a href="#"
                        >{message.subject}</a>
                    </div>
                </div>
                <div className="row message-body hidden">
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