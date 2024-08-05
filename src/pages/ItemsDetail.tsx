import { Layout } from '@/components/common'
import Banner from '@/components/common/Banner'
import { itemsData } from '@/data/itemsData'
import { useParams } from 'react-router-dom'
import { NotFound } from './NotFound'

export const ItemsDetail = () => {
  const { id } = useParams()
  const item = itemsData.find((item) => item._id === id)

  if (!item) {
    return <NotFound />
  }

  return (
    <div>
      <Banner title={item.title} />
      <Layout maxWidth="max-w-[1500px]">
        <div className="p-4 md:py-20 md:px-40 min-h-[400px] flex flex-col gap-10">
          <p>{item.description}</p>
          {item.description2 && <p>{item.description2}</p>}
          {item.description3 && <p>{item.description3}</p>}
        </div>
      </Layout>
    </div>
  )
}
