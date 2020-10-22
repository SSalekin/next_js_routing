import { useRouter } from 'next/router'

const Article = () => {
  const router = useRouter()
  const slug = router.query

  console.log(slug);

  return <p>Article</p>
}

export default Article