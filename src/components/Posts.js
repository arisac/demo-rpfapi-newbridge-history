import React, { useEffect, useState } from 'react'
const devTo = 'https://rpc1.newchain.newtonproject.org/newbridge/history?newchain_address=0x97549E368AcaFdCAE786BB93D98379f1D1561a29'

const Post = ({post}) => (
  
    <article>
      <p>from_network: {post.from_network}</p>
      <p>from_sub_network: {post.from_sub_network}</p>
      <p>from_chain_id: {post.from_chain_id}</p>
      <p>to_network: {post.to_network}</p>
      <p>to_sub_network: {post.to_sub_network}</p>
      <p>to_chain_id: {post.to_chain_id}</p>
      <p>from_address: {post.from_address}</p>
      <p>from_raw_address: {post.from_raw_address}</p>
      <p>to_address: {post.to_address}</p>
      <p>to_raw_address: {post.to_raw_address}</p>
      <p>from_tx_hash: {post.from_tx_hash}</p>
      <p>from_asset_type: {post.from_asset_type}</p>
      <p>from_asset_name: {post.from_asset_name}</p>
      <p>from_asset_symbol: {post.from_asset_symbol}</p>
      <p>from_asset_address: {post.from_asset_address}</p>
      <p>to_tx_hash: {post.to_tx_hash}</p>
      <p>to_asset_type: {post.to_asset_type}</p>
      <p>to_asset_name: {post.to_asset_name}</p>
      <p>to_asset_symbol: {post.to_asset_symbol}</p>
      <p>to_asset_address: {post.to_asset_address}</p>
      <p>amount_requested: {post.amount_requested}</p>
      <p>amount_fulfilled: {post.amount_fulfilled}</p>
      <p>fee: {post.fee}</p>
      <p>status: {post.status}</p>
    </article>
)

const Posts = () => {

  const [posts, setPosts] = useState({list:[]})
  useEffect(() => {
    fetch(devTo).then(r=> r.json()).then(setPosts)
  }, [])


  console.log(posts.list)

  
  // return null
  return posts.list.map(post => <Post post={post} />)
  // Object.entries(obj.topics).map(([k,v])=>
}

export default Posts