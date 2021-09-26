import React from 'react'

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date } = props;
        let defimg= "def_image.png"
        return (
            <div className="card-deck">
                <div className="card mx-auto  width">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>
                    </div>
                    <img src={!imageUrl ? defimg : imageUrl} style={{ height: "14rem"}} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title!==null?title.slice(0, 80):""}...  </h5>
                        <p className="card-text">{description!==null?description.slice(0, 100):""}...</p>
                        <p className="card-text"><small className="text-muted">By <b>{author!==null?author:"Anonymous"}</b> {date!==null?"on "+date.slice(0,10):null}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
     
}

export default NewsItem
