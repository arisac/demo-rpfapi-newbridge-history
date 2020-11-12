import React, { useEffect, useState } from 'react'
const devTo = 'https://rpc1.newchain.newtonproject.org/newbridge/history?newchain_address=0x97549E368AcaFdCAE786BB93D98379f1D1561a29'

const Post = ({post}) => (


  
    <article>
      <p>
        <span>from_network:</span> 
        {post.from_network}({post.from_sub_network}) 
        <span>chain_id:</span> 
        {post.from_chain_id}
      </p>
      <p>
        <span>to_network:</span> 
        {post.to_network}({post.to_sub_network}) 
        <span>chain_id:</span> 
        {post.to_chain_id}
      </p>
      <p>
        <span>from_address:</span> 
        {post.from_address} 
        <span>raw:</span> 
        {post.from_raw_address}
      </p>
      <p>
        <span>to_address:</span> 
        {post.to_address} 
        <span>raw:</span> 
        {post.to_raw_address}
      </p>
      <p>
        <span>from_tx_hash:</span> 
        {post.from_tx_hash}
      </p>
      <p>
        <span>from_asset:</span> 
        {post.from_asset_type} - {post.from_asset_name}({post.from_asset_symbol})
      </p>
      <p>
        <span>from_asset_address:</span> 
        {post.from_asset_address}
      </p>
      <p>
        <span>to_tx_hash:</span> 
        {post.to_tx_hash}
      </p>
      <p>
        <span>to_asset:</span> 
        {post.to_asset_type} - {post.to_asset_name}({post.to_asset_symbol})
      </p>
      <p>
        <span>to_asset_address:</span> 
        {post.to_asset_address}
      </p>
      <p>
        <span>amount_requested:</span> 
        {post.amount_requested} {post.from_asset_symbol}
      </p>
      <p>
        <span>fee:</span> 
        {post.fee} {post.from_asset_symbol}
      </p>
      <p>
        <span>amount_fulfilled:</span> 
        {post.amount_fulfilled} {post.to_asset_symbol}
      </p>
      <p>
        <span>status:</span> 
        {post.status}
      </p>
    </article>
)

const Posts = () => {

  const [posts, setPosts] = useState({list:[]})
  useEffect(() => {
    fetch(devTo).then(r=> r.json()).then(setPosts)
  }, [])

  return posts.list.map(post => <Post post={post} />)
}

export default Posts