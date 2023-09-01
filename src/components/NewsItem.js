import React from 'react'

const NewsItem = (props)=> {
   let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>

          <img src={!imageUrl?"https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80":imageUrl} className="card-img-top" alt="." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on  {new Date(date).toGMTString()}</small></p>
              <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
  }

export default NewsItem