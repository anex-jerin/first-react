

export const Book = (props) => {
  const { img, author, title } = props
  return (
    <article className='book'>
      <img src={img} style={{ width: 200, height: 300 }} alt='' />
      <h3>{title} </h3>
      <h6>{author} </h6>
    </article>
  )
}
